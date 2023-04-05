const { FXRandomIntBetween, FXRandomBool, FXRandomBetween } = require("./fxrandHelper");

const palettes = [
  {
    name: "Euphoria",
    color: "#81F0E5",
  },
  {
    name: "Crystals",
    color: "#C9F9FF",
  },
  {
    name: "Postie Pete",
    color: "#944BBB",
  },
  {
    name: "Wisp",
    color: "#E8E9EB",
  },
  {
    name: "At Sea",
    color: "#D1F5FF",
  },
  {
    name: "Emerald",
    color: "#5bba6f",
  },
  {
    name: "Queso",
    color: "#5941a9",
  },
  {
    name: "Passion",
    color: "#885a89",
  },
];

export const generateConfig = (sketchCanvas) => {
  const finishIn = FXRandomBetween(500, 750);

  const frameRate = FXRandomBetween(30, 200);

  const config = {
    shouldFinish: $fx.getParam("infinite_render"),
    finishIn: $fx.getParam("finish_in"),
    palette: {
      color: $fx.getParam("color_id").hex.rgb,
    },
    directionChange: $fx.getParam("direction_change"),
    speed: $fx.getParam("speed"),
    velocityDivider: $fx.getParam("velocity_divider"),
    noiseScale: $fx.getParam("noise_scale"),
    noiseStrength: $fx.getParam("noise_strength"),
    borderWidth: 25,
    noiseMultiplier: $fx.getParam("noise_multiplier"),
    frameRate,
    strokeWeight: $fx.getParam("stroke_weight"),
  };

  // console.table(config);

  return config;
};

/**
 * Configurables:
 *  Num + View Distance. Low num = high view distance, high num = low view distance
 *  Angle -> -360 -> 360
 * Noise Scale -> 500 -> 9000
 *
 * Wispy = cos, hectic = tan
 */
