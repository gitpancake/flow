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
const { FXRandomBetween } = require("./utils/fxrandHelper");
import "p5";
import { params } from "./utils/params";

var num = 4500;
var finishIn = 0;
var ticks = 0;
var particles = [num];

$fx.params(params);

window.setup = () => {
  const sketchCanvas = createCanvas(1000, 1000);

  noiseSeed(fxhash);
  randomSeed(fxhash);

  const config = generateConfig(sketchCanvas);

  frameRate(config.frameRate);

  strokeWeight(config.strokeWeight);

  for (let i = 0; i < num; i++) {
    var loc = createVector(FXRandomBetween(config.borderWidth, sketchCanvas.width - config.borderWidth), FXRandomBetween(config.borderWidth, sketchCanvas.height - config.borderWidth));

    var dir = createVector(loc.x, loc.y);

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
    fxpreview();
  }

  if (!$fx.getParam("infinite_render") && ticks >= finishIn) {
    noLoop();
  }
};
