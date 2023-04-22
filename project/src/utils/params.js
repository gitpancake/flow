const params = [
  {
    id: "appearance",
    name: "Weight",
    type: "select",
    options: {
      options: ["light", "medium", "heavy"],
    },
  },
  {
    id: "behaviour",
    name: "Behaviour",
    type: "select",
    options: {
      options: ["lively", "serene", "tranquil"],
    },
  },
  {
    id: "mood",
    name: "Mood",
    type: "select",
    options: {
      options: ["moody", "broody", "happy", "bright"],
    },
  },
  {
    id: "curvature",
    name: "Curvature",
    type: "select",
    options: {
      options: ["wide", "shallow", "pronounced", "deep"],
    },
  },
  {
    id: "noise_multiplier",
    name: "Brush",
    type: "select",
    options: {
      options: ["flow", "granular", "saturated", "sharp"],
    },
  },
  {
    id: "color_palette",
    name: "Palette",
    type: "select",
    options: {
      options: ["1350", "water", "kandinsky", "chagall", "pissaro", "fearnley", "kusama", "anguissola"],
    },
  },
  {
    id: "movement",
    name: "Movement",
    type: "select",
    options: {
      options: ["eratic", "smooth", "rounded", "burst", "stretch"],
    },
  },
  {
    id: "speed",
    name: "Speed",
    type: "select",
    options: {
      options: ["slow", "moderate", "fast"],
    },
  },
  {
    id: "infinite_render",
    name: "Infinite Render",
    type: "boolean",
  },
];

export { params };
