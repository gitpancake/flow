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
const { generateConfig } = require("./utils/config");
const { FXRandomBetween, FXRandomIntBetween } = require("./utils/fxrandHelper");
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
  const sketchCanvas = createCanvas(1000, 1000);

  config = generateConfig(sketchCanvas);

  // Define the renaissance-era color palette
  let beauties = [
    color(197, 159, 80), // Gold
    color(196, 30, 58), // Vermilion
    color(26, 36, 84), // Ultramarine
    color(105, 50, 110), // Mauve
    color(160, 72, 45), // Ochre
  ];

  let renaissance = [
    color(197, 159, 80), // Gold
    color(196, 30, 58), // Vermilion
    color(26, 36, 84), // Ultramarine
    color(105, 50, 110), // Mauve
    color(160, 72, 45), // Ochre
    color(221, 207, 160), // Pale Yellow
    color(206, 138, 25), // Burnt Orange
    color(84, 47, 15), // Burnt Umber
    color(214, 121, 140), // Rose
    color(66, 58, 76), // Payne's Grey
  ];

  let bluePalette = [
    color(28, 72, 138), // A darker, navy blue
    color(31, 97, 141), // A medium, deep blue
    color(77, 166, 211), // A brighter, light blue
    color(174, 219, 237), // A very light, pastel blue
    color(226, 240, 246), // A very light, almost white blue
  ];

  let garden = [
    color(31, 33, 7),
    color(49, 64, 33),
    color(16, 23, 5),
    color(166, 168, 151),
    color(61, 58, 23),
    color(38, 47, 15),
    color(104, 117, 73),
    color(73, 80, 72),
    color(44, 59, 17),
    color(115, 119, 100),
  ];

  let cheeky = [color(168, 171, 167), color(193, 206, 209), color(188, 200, 200), color(194, 203, 202), color(182, 163, 149)];
  let loaders = [color(45, 40, 39), color(44, 72, 102), color(16, 20, 27), color(199, 213, 223), color(53, 63, 75), color(47, 49, 61), color(122, 152, 181), color(9, 10, 10)];

  const palettes = [
    {
      name: "beauties",
      colors: beauties,
    },
    {
      name: "renaissance",
      colors: renaissance,
    },
    {
      name: "blues",
      colors: bluePalette,
    },
    {
      name: "loaders",
      colors: loaders,
    },
    {
      name: "garden",
      colors: garden,
    },
    {
      name: "cheeky",
      colors: cheeky,
    },
  ];

  const colors = palettes.find((x) => x.name === config.paletteName).colors;

  noiseSeed(fxhash);
  randomSeed(fxhash);

  colorMode(RGB);

  // Determine the number of circles to pack into the canvas
  let numCircles = config.noiseScale;

  // Generate random positions for the circles
  for (let i = 0; i < numCircles; i++) {
    let x = FXRandomIntBetween(0, width / 2);
    let y = FXRandomIntBetween(0, height / 2);

    let chosenColor = colors[Math.floor(FXRandomIntBetween(0, colors.length))];

    let variation = Math.floor(Math.random() * 50) - 25;
    let r = Math.max(0, Math.min(255, red(chosenColor) + variation));
    let g = Math.max(0, Math.min(255, green(chosenColor) + variation));
    let b = Math.max(0, Math.min(255, blue(chosenColor) + variation));
    chosenColor = color(r, g, b);

    positions.push({ x: x, y: y, color: chosenColor });
  }

  frameRate(config.frameRate);

  background("#313639");

  strokeWeight(config.strokeWeight);

  finishIn = config.finishIn;

  flowField = createFlowField();
};

function createFlowField() {
  let flowField = [];

  for (let x = 0; x < width / 2; x++) {
    flowField[x] = [];

    for (let y = 0; y < height / 2; y++) {
      let noiseValue = noise(x * config.noiseStrength, y * config.noiseStrength);

      let angle = noiseValue * PI * 2;

      flowField[x][y] = { x: Math.cos(angle), y: Math.sin(angle) };
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

    if (pos.x >= 0 && pos.x <= width && pos.y >= 0 && pos.y <= height) {
      stroke(pos.color, 55);
      strokeWeight(config.strokeWeight);
      line(pos.x, pos.y, pos.x + lineThickness, pos.y + lineThickness);
      stroke(pos.color, 10);
      line(pos.x + (lineThickness + 0.5), pos.y + (lineThickness + 0.5), pos.x + (lineThickness + 0.5), pos.y + (lineThickness + 0.5));
    } else {
      positions.splice(i, 1);
      i--;
    }
  }
}

window.draw = () => {
  drawCircles();
  // fill(0, 5, 0, FXRandomBetween(0, 10));
  // rect(0, 0, width, height);

  // for (let i = 0; i < particles.length; i++) {
  //   particles[i].run();
  // }

  ticks++;

  // if (ticks >= finishIn) {
  //   fxpreview();
  // }

  if (config.lineThickness > 4 && ticks >= 2500) {
    noLoop();
    fxpreview();
  } else if (ticks >= 3000) {
    noLoop();
    fxpreview();
  }
};
