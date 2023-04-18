// import { params } from "./utils/params";

// console.log(fxhash);
// console.log(fxrand());

// const sp = new URLSearchParams(window.location.search);
// console.log(sp);

// // this is how to define parameters

// // this is how features can be defined
// $fx.features({
//   "A random feature": Math.floor($fx.rand() * 10),
//   "A random boolean": $fx.rand() > 0.5,
//   "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
//   "Feature from params, its a number": $fx.getParam("number_id"),
// });

// // log the parameters, for debugging purposes, artists won't have to do that
// console.log("Current param values:");
// // Raw deserialize param values
// console.log($fx.getRawParams());
// // Added addtional transformation to the parameter for easier usage
// // e.g. color.hex.rgba, color.obj.rgba.r, color.arr.rgb[0]
// console.log($fx.getParams());

// // how to read a single raw parameter
// console.log("Single raw value:");
// console.log($fx.getRawParam("color_id"));
// // how to read a single transformed parameter
// console.log("Single transformed value:");
// console.log($fx.getParam("color_id"));

// // update the document based on the parameters
// document.body.style.background = $fx.getParam("color_id").hex.rgba;
// document.body.innerHTML = `
// <p>
// url: ${window.location.href}
// </p>
// <p>
// hash: ${$fx.hash}
// </p>
// <p>
// params:
// </p>
// <pre>
// ${$fx.stringifyParams($fx.getRawParams())}
// </pre>
// <pre style="color: white;">
// ${$fx.stringifyParams($fx.getRawParams())}
// </pre>
// `;

const { Particle } = require("./shapes/Particle");
// const { noiseScaleName, speedName, frameRateName, distanceName, noiseMultiplierName, velocityDividerName } = require("./utils");
const { generateConfig, staticConfig, colorPalettePicker } = require("./utils/config");
const { FXRandomBetween, FXRandomIntBetween, FXRandomBool } = require("./utils/fxrandHelper");
import "p5";
import { params } from "./utils/params";

var num = 4500;
var finishIn = 0;
var ticks = 0;
var particles = [num];

let circleRadius = 2.5;
let circlePadding = 1;

$fx.params(params);

let positions = [];

let config;
let flowField;

window.setup = () => {
  const sketchCanvas = createCanvas(staticConfig.canvasWidth, staticConfig.canvasHeight);

  config = generateConfig(sketchCanvas);

  const colors = colorPalettePicker(config.paletteName);

  noiseSeed(fxhash);
  randomSeed(fxhash);

  colorMode(RGB);

  // Determine the number of circles to pack into the canvas
  let numCircles = config.noiseScale;

  // Generate random positions for the circles
  for (let i = 0; i < numCircles; i++) {
    let x = FXRandomIntBetween(0, staticConfig.canvasWidth);
    let y = FXRandomIntBetween(0, staticConfig.canvasHeight);

    let chosenColor = colors[Math.floor(FXRandomIntBetween(0, colors.length))];

    let variation = Math.floor(Math.random() * 50) - 12.5;
    let r = Math.max(0, Math.min(255, red(chosenColor) + variation));
    let g = Math.max(0, Math.min(255, green(chosenColor) + variation));
    let b = Math.max(0, Math.min(255, blue(chosenColor) + variation));
    chosenColor = color(r, g, b);

    positions.push({ x: x, y: y, color: chosenColor });
  }

  frameRate(config.frameRate);

  background("#000");

  strokeWeight(config.strokeWeight);

  finishIn = config.finishIn;

  flowField = createFlowField();
};

function createFlowField() {
  let flowField = [];

  for (let x = 0; x < staticConfig.canvasWidth / 2; x++) {
    flowField[x] = [];

    for (let y = 0; y < staticConfig.canvasHeight / 2; y++) {
      let noiseValue = noise(x * config.noiseStrength, y * config.noiseStrength);

      let angle = noiseValue * PI * 2;

      const shouldFlip = config.shouldFlip;

      if (shouldFlip) {
        const dir = FXRandomBool(0.9);
        if (dir) {
          const flipper = FXRandomBool(0.9);

          if (flipper) {
            flowField[x][y] = { x: Math.cos(angle), y: Math.sin(angle) };
          } else {
            flowField[x][y] = { x: Math.atan(2), y: Math.acos(200) };
          }
        } else {
          flowField[x][y] = { x: Math.tan(angle), y: Math.cos(angle) };
        }
      } else {
        flowField[x][y] = { x: Math.cos(angle), y: Math.sin(angle) };
      }
    }
  }

  return flowField;
}

// Draw the circles onto the canvas, using the Perlin noise flow field to guide their movement
function drawCircles() {
  let lineThickness = config.lineThickness;

  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];

    let x = Math.floor(pos.x / circleRadius / 4);
    let y = Math.floor(pos.y / circleRadius / 4);

    let force = flowField[x][y];

    pos.x += (force.x / config.noiseMultiplier) * config.speed;
    pos.y -= (force.y / config.noiseMultiplier) * config.speed;

    if (pos.x >= 40 && pos.x <= staticConfig.canvasWidth - 40 && pos.y >= 40 && pos.y <= staticConfig.canvasHeight - 40) {
      stroke(pos.color, 55);

      strokeWeight(config.strokeWeight);
      line(pos.x, pos.y, pos.x + lineThickness, pos.y + lineThickness);
      stroke(0);
      const thicknessMul = FXRandomIntBetween(1, 2);
      line(pos.x + lineThickness * thicknessMul, pos.y + lineThickness * thicknessMul, pos.x + lineThickness * thicknessMul, pos.y + lineThickness * thicknessMul);
    } else {
      positions.splice(i, 1);
      i--;
    }
  }
}

window.draw = () => {
  drawCircles();

  ticks++;

  if (config.lineThickness > 4 && ticks >= 2500) {
    noLoop();
    fxpreview();
  } else if (ticks >= 3000) {
    noLoop();
    fxpreview();
  }
};
