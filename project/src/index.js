const { Particle } = require("./shapes/Particle");
const { noiseScaleName, speedName, frameRateName, distanceName, noiseMultiplierName, velocityDividerName } = require("./utils");
const { generateConfig } = require("./utils/config");
const { FXRandomBetween } = require("./utils/fxrandHelper");
import "p5";

var num = 4500;
var finishIn = 0;
var ticks = 0;
var particles = [num];

window.setup = () => {
  const canvasDiv = document.getElementById("drawing-canvas");

  const sketchCanvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);

  sketchCanvas.parent("drawing-canvas");

  noiseSeed(fxhash);
  randomSeed(fxhash);

  const config = generateConfig(sketchCanvas);

  $fx.features = {
    Palette: config.palette.name,
    Feeling: noiseScaleName(config.noiseScale),
    Speed: speedName(config.speed),
    Inhibition: frameRateName(config.frameRate),
    Closeness: distanceName(config.distance),
    Type: noiseMultiplierName(config.noiseMultiplier),
    Action: velocityDividerName(config.velocityDivider),
  };

  frameRate(config.frameRate);

  strokeWeight(config.strokeWeight);

  for (let i = 0; i < num; i++) {
    //x value start slightly outside the right of canvas, z value how close to viewer
    const viewDistance = config.viewDistance;

    var loc = createVector(FXRandomBetween(config.borderWidth, sketchCanvas.width - config.borderWidth), FXRandomBetween(config.borderWidth, sketchCanvas.height - config.borderWidth), viewDistance);

    var angle = cos(360);

    var dir = createVector(angle, angle);

    particles[i] = new Particle(loc, dir, config, sketchCanvas);
  }

  finishIn = config.finishIn;
};

window.draw = () => {
  fill(0, 5, 0, FXRandomBetween(0, 10));
  rect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }

  ticks++;

  if (ticks >= finishIn) {
    noLoop();
    fxpreview();
  }
};
