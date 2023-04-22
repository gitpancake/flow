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

export const getNoiseMultiplier = (name) => {
  switch (name) {
    case "flow":
      return FXRandomIntBetween(3, 4);
    case "granular":
      return FXRandomIntBetween(4, 5);
    case "saturated":
      return FXRandomIntBetween(5, 6);
    case "sharp":
    default:
      return FXRandomIntBetween(6, 7);
  }
};

export const getActiveLevel = (behaviour) => {
  switch (behaviour) {
    case "lively":
      return FXRandomIntBetween(6000, 7000);
    case "serene":
      return FXRandomIntBetween(1000, 1500);
    case "tranquil":
    default:
      return FXRandomIntBetween(400, 500);
  }
};

export const getCurvature = (curve) => {
  switch (curve) {
    case "wide":
      return 0.025;
    case "shallow":
      return 0.035;
    case "pronounced":
      return 0.045;
    case "deep":
      return 0.075;
  }
};

export const getSpeed = (speed) => {
  switch (speed) {
    case "slow":
      return FXRandomBetween(3, 5);
    case "fast":
      return FXRandomBetween(8, 9);
    default:
      return FXRandomBetween(5, 9);
  }
};

export const getMood = (mood) => {
  switch (mood) {
    case "moody":
      return 75;
    case "broody":
      return 50;
    case "happy":
      return 25;
    case "bright":
      return 5;
  }
};

export const getBase = (mood) => {
  switch (mood) {
    case "moody":
      return 0;
    case "broody":
      return 25;
    case "happy":
      return 50;
    case "bright":
      return 100;
  }
};

export const getStrokeWeight = (appearance) => {
  switch (appearance) {
    case "light":
      return {
        stroke: FXRandomBetween(0.75, 1.5),
        thickness: FXRandomBetween(1, 3),
      };
    case "heavy":
      return {
        stroke: FXRandomBetween(1.5, 1.75),
        thickness: FXRandomBetween(5, 7.5),
      };
    default:
      return {
        stroke: FXRandomBetween(0.5, 1.5),
        thickness: FXRandomBetween(3, 5),
      };
  }
};

export const generateConfig = () => {
  const config = {
    speed: $fx.getParam("speed"),
    behaviour: $fx.getParam("behaviour"),
    noiseMultiplier: $fx.getParam("noise_multiplier"),
    paletteName: $fx.getParam("color_palette"),
    movement: $fx.getParam("movement"),
    curvature: $fx.getParam("curvature"),
    appearance: $fx.getParam("appearance"),
    mood: $fx.getParam("mood"),
    infinite: $fx.getParam("infinite_render"),
  };

  console.table(config);

  $fx.features(config);

  return config;
};

export const colorPalettePicker = (paletteName) => {
  // #Define the renaissance-era color palette
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

  let deepKandinskyPalette = [
    color(63, 74, 129), // blue
    color(225, 214, 201), // light beige
    color(138, 17, 22), // dark red
    color(168, 172, 161), // light greenish-gray
    color(238, 232, 225), // off-white
    color(215, 206, 185), // beige
    color(220, 207, 157), // light brown
    color(128, 84, 46), // dark brown
    color(10, 9, 11), // black
  ];

  let chagallPalette = [
    color(72, 98, 142), // Blue
    color(161, 95, 62), // Orange
    color(44, 67, 115), // Indigo
    color(226, 153, 50), // Yellow
    color(153, 63, 80), // Red
    color(119, 142, 63), // Green
    color(234, 196, 217), // Pink
    color(102, 102, 102), // Gray
  ];

  let murakamiPalette = [
    color(255, 187, 0), // Yellow
    color(255, 87, 51), // Red
    color(0, 166, 150), // Teal
    color(255, 140, 178), // Pink
    color(0, 130, 200), // Blue
    color(255, 170, 0), // Orange
    color(102, 204, 0), // Green
    color(255, 255, 255), // White
  ];

  let pissarroPalette = [
    color(206, 218, 229, 255), // #CEDAE5
    color(153, 156, 142, 255), // #999C8E
    color(66, 85, 76, 90), // #42554C
    color(124, 138, 101, 255), // #7C8A65
    color(246, 247, 242, 255), // #F6F7F2
    color(254, 229, 167, 255), // #FEE5A7
    color(175, 173, 159, 255), // #AFAD9F
  ];

  let fearnleyPalette = [
    color(121, 131, 144, 90), // #798390
    color(111, 119, 130, 90), // #6F7782
    color(243, 201, 100, 255), // #F3C964
    color(255, 191, 80, 255), // #FFBF50
    color(247, 191, 82, 255), // #F7BF52
  ];

  let kusamaColors = [
    color(255, 0, 0), // red
    color(255, 255, 0), // yellow
    color(0, 255, 255), // cyan
    color(255, 0, 255), // magenta
    color(255, 255, 255), // white
    color(255, 128, 0), // orange
    color(0, 255, 0), // green
    color(128, 0, 255), // purple
    color(255, 0, 128), // pink
    color(0, 0, 0), // black
  ];

  let anguissolaColors = [
    color(255, 204, 204), // light pink
    color(255, 153, 204), // pink
    color(204, 255, 204), // light green
    color(153, 255, 204), // green
    color(204, 204, 255), // light blue
    color(153, 204, 255), // blue
    color(255, 204, 153), // peach
    color(255, 255, 204), // light yellow
    color(255, 102, 102), // red
    color(102, 102, 102), // gray
  ];

  const palettes = [
    {
      name: "1350",
      colors: renaissance,
    },
    {
      name: "water",
      colors: bluePalette,
    },
    {
      name: "kandinsky",
      colors: deepKandinskyPalette,
    },
    {
      name: "chagall",
      colors: chagallPalette,
    },
    {
      name: "murakami",
      colors: murakamiPalette,
    },
    {
      name: "pissaro",
      colors: pissarroPalette,
    },
    {
      name: "fearnley",
      colors: fearnleyPalette,
    },
    {
      name: "kusama",
      colors: kusamaColors,
    },
    {
      name: "anguissola",
      colors: anguissolaColors,
    },
  ];

  return palettes.find((x) => x.name === paletteName).colors;
};
