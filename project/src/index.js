const { generateConfig, staticConfig, colorPalettePicker, getNoiseMultiplier, getCurvature, getActiveLevel, getSpeed, getStrokeWeight, getMood, getBase } = require("./utils/config");
const { FXRandomIntBetween, FXRandomBool, FXRandomBetween } = require("./utils/fxrandHelper");
const { params } = require("./utils/params");
require("p5");

var finishIn = 0;
var ticks = 0;
let weight = 0;
let lineThickness = 0;

let circleRadius = 1;

$fx.params(params);

let positions = [];

let config;
let flowField;

window.setup = () => {
  const sketchCanvas = createCanvas(staticConfig.canvasWidth, staticConfig.canvasHeight);

  config = generateConfig(sketchCanvas);
  weight = getStrokeWeight(config.appearance).stroke;
  lineThickness = getStrokeWeight(config.appearance).thickness;

  const colors = colorPalettePicker(config.paletteName);

  //Set noise seeds
  noiseSeed(fxhash);
  randomSeed(fxhash);

  //Set color mode
  colorMode(RGB);

  //Set up the canvas
  frameRate(30);

  background("#000");

  strokeWeight(weight);

  // Determine the number of circles to pack into the canvas
  const numCircles = getActiveLevel(config.behaviour);

  //Determine the mood for this canvas
  mood = getMood(config.mood);

  // Generate random positions and generate color variance for the circles
  for (let i = 0; i < numCircles; i++) {
    let x = FXRandomIntBetween(0, staticConfig.canvasWidth);
    let y = FXRandomIntBetween(0, staticConfig.canvasHeight);

    let chosenColor = colors[Math.floor(FXRandomIntBetween(0, colors.length))];

    let variation = Math.floor(Math.random() * 25) - mood;

    let r = Math.max(0, Math.min(255, red(chosenColor) + variation));
    let g = Math.max(0, Math.min(255, green(chosenColor) + variation));
    let b = Math.max(0, Math.min(255, blue(chosenColor) + variation));

    chosenColor = color(r, g, b);

    positions.push({ x: x / 4, y: y / 2, color: chosenColor });
  }

  flowField = createFlowField();
};

function createFlowField() {
  let flowField = [];

  for (let x = 0; x < staticConfig.canvasWidth / 2; x++) {
    flowField[x] = [];

    for (let y = 0; y < staticConfig.canvasHeight / 2; y++) {
      const noiseStrength = getCurvature(config.curvature);

      let noiseValue = noise(x * noiseStrength, y * noiseStrength);

      let angle = noiseValue * PI * 2;

      if (config.movement === "eratic") {
        const dir = FXRandomBool(0.7);

        if (dir) {
          const flipper = FXRandomBool(0.9);

          if (flipper) {
            flowField[x][y] = { x: Math.cos(angle), y: Math.sin(angle) };
          } else {
            flowField[x][y] = { x: Math.atan(angle), y: Math.acos(angle) };
          }
        } else {
          flowField[x][y] = { x: Math.tan(angle), y: Math.cos(angle) };
        }
      } else if (config.movement === "rounded") {
        flowField[x][y] = {
          y: x / (staticConfig.canvasWidth / FXRandomIntBetween(20, 30)) / PI,
          x: y / (staticConfig.canvasHeight / FXRandomIntBetween(20, 30)) / PI,
        };
      } else if (config.movement === "burst") {
        flowField[x][y] = { y: x / 1.5, x: y / Math.tan(2) };
      } else if (config.movement === "stretch") {
        flowField[x][y] = { x: Math.tan(angle), y: Math.sin(angle) };
      } else {
        flowField[x][y] = { x: Math.cos(angle), y: Math.sin(angle) };
      }
    }
  }

  return flowField;
}

// Draw the circles onto the canvas, using the Perlin noise flow field to guide their movement
function drawCircles() {
  for (let i = 0; i < positions.length; i++) {
    let pos = positions[i];

    let x = Math.ceil(pos.x / 1.8 / 4);
    let y = Math.ceil(pos.y / 1.8 / 4);

    let force = flowField[x][y];

    let speed = getSpeed(config.speed);

    const noiseMultiplier = getNoiseMultiplier(config.noiseMultiplier);

    const randy = FXRandomBool(0.5);

    if (config.noiseMultiplier === "flow") {
      speed = speed * PI;
    }

    if (config.noiseMultiplier === "granular") {
      speed = speed * HALF_PI;
    }

    if (config.noiseMultiplier === "sharp") {
      speed = speed * 1.2;
    }

    if (randy) {
      pos.x += (force.x / noiseMultiplier) * speed;
      pos.y -= (force.y / noiseMultiplier) * speed;
    } else {
      pos.x -= (force.x / noiseMultiplier) * speed;
      pos.y += (force.y / noiseMultiplier) * speed;
    }

    if (pos.x >= 40 && pos.x <= staticConfig.canvasWidth - 40 && pos.y >= 40 && pos.y <= staticConfig.canvasHeight - 40) {
      stroke(pos.color);

      line(pos.x, pos.y, pos.x + lineThickness, pos.y + lineThickness);

      stroke(0);

      line(pos.x + lineThickness + 1, pos.y + lineThickness + 1, pos.x + lineThickness + 1, pos.y + lineThickness + 1);
    } else {
      positions.splice(i, 1);
      i--;
    }
  }
}

window.draw = () => {
  drawCircles();

  ticks++;

  if (ticks >= 1500) {
    if (!config.infinite) {
      noLoop();
    }
    fxpreview();
  }
};
