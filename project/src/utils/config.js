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

  const directionChange = FXRandomBetween(1, 1.5);
  const palette = palettes[FXRandomIntBetween(0, palettes.length)];

  const speed = FXRandomBetween(1, 5);

  const borderWidth = 50;

  let viewDistance = FXRandomBetween(0.25, 0.75);
  const velocityDivider = FXRandomIntBetween(3, 8);

  const noiseScale = FXRandomBetween(1000, 4500);
  const noiseStrength = FXRandomBetween(0.025, 0.05);

  const travelling = FXRandomBool(0.5);
  const distance = FXRandomBetween(0, 500);

  if (travelling) {
    viewDistance = FXRandomBetween(0.5, 0.75);
  }

  const noiseMultiplier = FXRandomBetween(TWO_PI, 200);

  const frameRate = FXRandomBetween(30, 200);
  const strokeWeight = FXRandomBetween(0.75, 1.5);

  const config = {
    finishIn,
    viewDistance,
    palette,
    directionChange,
    speed,
    velocityDivider,
    noiseScale,
    noiseStrength,
    falling: travelling,
    distance,
    borderWidth,
    noiseMultiplier,
    frameRate,
    strokeWeight,
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
