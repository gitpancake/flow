const { FXRandomBetween, FXRandomOption, FXRandomIntBetween, FXRandomBool } = require("./fxrandHelper");

const gridSize = {
  x: FXRandomIntBetween(4, 10),
  y: FXRandomIntBetween(1, 14),
};

export const staticConfig = {
  gridSize,
  canvasWidth: 900 * 1.2,
  canvasHeight: 1200 * 1.2,
  gridMargin: {
    x: 40,
    y: 40,
  },
  gridSpacing: FXRandomOption([8, 12, 16, 20]),
};

export const generateConfig = () => {
  const frameRate = FXRandomBetween(30, 200);

  const config = {
    finishIn: $fx.getParam("finish_in"),
    directionChange: $fx.getParam("direction_change"),
    speed: $fx.getParam("speed"),
    velocityDivider: FXRandomBetween(0, 4),
    noiseScale: $fx.getParam("noise_scale"),
    noiseStrength: $fx.getParam("noise_strength"),
    borderWidth: 25,
    noiseMultiplier: $fx.getParam("noise_multiplier"),
    frameRate,
    strokeWeight: $fx.getParam("stroke_weight"),
    paletteName: $fx.getParam("color_palette"),
    lineThickness: $fx.getParam("line_thickness"),
    shouldFlip: FXRandomBool(0.5),
  };

  console.table(config);

  return config;
};

export const colorPalettePicker = (paletteName) => {
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

  let tokyo = [color(255, 255, 255), color(255, 255, 255), color(255, 255, 255), color(255, 255, 255), color(255, 255, 255), color(255, 0, 0), color(255, 0, 0)];

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
    {
      name: "tokyo",
      colors: tokyo,
    },
  ];

  return palettes.find((x) => x.name === paletteName).colors;
};
