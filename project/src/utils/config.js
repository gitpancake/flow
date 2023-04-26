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
    case "bustling":
      return FXRandomBetween(3000, 5000);
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
      return 1.0;
    case "broody":
      return 0.8;
    case "happy":
      return 0.5;
    case "bright":
      return 0.1;
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

//1 is bright, 100 is muted
export const colorPalettePicker = (paletteName) => {
  const renWithPres = [
    {
      chosenColor: {
        // Gold
        r: 197,
        g: 159,
        b: 80,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Vermilion
        r: 196,
        g: 30,
        b: 58,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Ultramarine
        r: 26,
        g: 36,
        b: 84,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Mauve
        r: 105,
        g: 50,
        b: 110,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Ochre
        r: 160,
        g: 72,
        b: 45,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Pale Yellow
        r: 221,
        g: 207,
        b: 160,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Burnt Orange
        r: 206,
        g: 138,
        b: 25,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Burnt Umber
        r: 84,
        g: 47,
        b: 15,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Rose
        r: 214,
        g: 121,
        b: 140,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        // Payne's Grey
        r: 66,
        g: 58,
        b: 76,
      },
      promenance: 25,
    },
  ];

  const monochrome = [
    {
      chosenColor: {
        r: 0,
        g: 0,
        b: 0,
      },
      promenance: 25,
    },
    {
      chosenColor: {
        r: 255,
        g: 255,
        b: 255,
      },
      promenance: 75,
    },
    {
      chosenColor: {
        r: 128,
        g: 0,
        b: 255,
      },
      promenance: 10,
    },
  ];

  let bluePalette = [
    {
      chosenColor: {
        r: 28,
        g: 72,
        b: 138,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 31,
        g: 97,
        b: 141,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 77,
        g: 166,
        b: 211,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 174,
        g: 219,
        b: 237,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 226,
        g: 240,
        b: 246,
      },
      promenance: 100,
    },
  ];

  let deepKandinskyPalette = [
    {
      chosenColor: {
        r: 63,
        g: 74,
        b: 129,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 225,
        g: 214,
        b: 201,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 138,
        g: 17,
        b: 22,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 168,
        g: 172,
        b: 161,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 238,
        g: 232,
        b: 225,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 215,
        g: 206,
        b: 185,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 220,
        g: 207,
        b: 157,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 128,
        g: 84,
        b: 46,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 10,
        g: 9,
        b: 11,
      },
      promenance: 100,
    },
  ];

  let chagallPalette = [
    {
      chosenColor: {
        r: 72,
        g: 98,
        b: 142,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 161,
        g: 95,
        b: 62,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 44,
        g: 67,
        b: 115,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 226,
        g: 153,
        b: 50,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 153,
        g: 63,
        b: 80,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 119,
        g: 142,
        b: 63,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 234,
        g: 196,
        b: 217,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 102,
        g: 102,
        b: 102,
      },
      promenance: 100,
    },
  ];

  let murakamiPalette = [
    {
      chosenColor: {
        r: 255,
        g: 187,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 87,
        b: 51,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 0,
        g: 166,
        b: 150,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 140,
        b: 178,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 0,
        g: 130,
        b: 200,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 170,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 102,
        g: 204,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 255,
        b: 255,
      },
      promenance: 100,
    },
  ];

  let pissarroPalette = [
    {
      chosenColor: {
        r: 206,
        g: 218,
        b: 229,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 153,
        g: 156,
        b: 142,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 66,
        g: 85,
        b: 76,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 124,
        g: 138,
        b: 101,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 246,
        g: 247,
        b: 242,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 254,
        g: 229,
        b: 167,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 175,
        g: 173,
        b: 159,
      },
      promenance: 100,
    },
  ];

  let fearnleyPalette = [
    {
      chosenColor: {
        r: 121,
        g: 131,
        b: 144,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 111,
        g: 119,
        b: 130,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 243,
        g: 201,
        b: 100,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 191,
        b: 80,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 247,
        g: 191,
        b: 82,
      },
      promenance: 100,
    },
  ];

  let kusamaColors = [
    {
      chosenColor: {
        r: 255,
        g: 0,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 255,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 0,
        g: 255,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 0,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 255,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 128,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 0,
        g: 255,
        b: 0,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 128,
        g: 0,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 0,
        b: 128,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 0,
        g: 0,
        b: 0,
      },
      promenance: 100,
    },
  ];

  let anguissolaColors = [
    {
      chosenColor: {
        r: 255,
        g: 204,
        b: 204,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 153,
        b: 204,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 204,
        g: 255,
        b: 204,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 153,
        g: 255,
        b: 204,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 204,
        g: 204,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 153,
        g: 204,
        b: 255,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 204,
        b: 153,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 255,
        b: 204,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 255,
        g: 102,
        b: 102,
      },
      promenance: 100,
    },
    {
      chosenColor: {
        r: 102,
        g: 102,
        b: 102,
      },
      promenance: 100,
    },
  ];

  const palettes = [
    {
      name: "1350",
      colors: renWithPres,
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
    {
      name: "monochrome",
      colors: monochrome,
    },
  ];

  return palettes.find((x) => x.name === paletteName).colors;
};
