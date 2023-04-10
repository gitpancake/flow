const params = [
  {
    id: "noise_strength",
    name: "Noise Strength",
    type: "number",
    //default: Math.PI,
    options: {
      min: 0.025,
      max: 0.075,
      step: 0.01,
    },
  },
  {
    id: "noise_scale",
    name: "Noise Scale",
    type: "number",
    //default: Math.PI,
    options: {
      min: 1000,
      max: 4500,
      step: 1,
    },
  },
  {
    id: "direction_change",
    name: "Direction Change",
    type: "number",
    //default: Math.PI,
    options: {
      min: 0.5,
      max: 1.5,
      step: 0.1,
    },
  },
  {
    id: "stroke_weight",
    name: "Stroke Weight",
    type: "number",
    //default: Math.PI,
    options: {
      min: 0.5,
      max: 1.75,
      step: 0.05,
    },
  },
  {
    id: "finish_in",
    name: "Finish In (ms)",
    type: "number",
    //default: Math.PI,
    options: {
      min: 1000,
      max: 10000,
      step: 1000,
    },
  },
  {
    id: "noise_multiplier",
    name: "Noise Multiplier",
    type: "number",
    //default: Math.PI,
    options: {
      min: 2,
      max: 20,
      step: 1,
    },
  },
  {
    id: "infinite_render",
    name: "Infinite Render",
    type: "boolean",
    //default: true,
  },
  //   {
  //     id: "bigint_id",
  //     name: "A bigint",
  //     type: "bigint",
  //     //default: BigInt(Number.MAX_SAFE_INTEGER * 2),
  //     options: {
  //       min: Number.MIN_SAFE_INTEGER * 4,
  //       max: Number.MAX_SAFE_INTEGER * 4,
  //       step: 1,
  //     },
  //   },
  //   {
  //     id: "select_id",
  //     name: "A selection",
  //     type: "select",
  //     //default: "pear",
  //     options: {
  //       options: ["apple", "orange", "pear"],
  //     },
  //   },
  {
    id: "speed",
    name: "Speed",
    type: "number",
    //default: Math.PI,
    options: {
      min: 1,
      max: 5,
      step: 0.1,
    },
  },
  {
    id: "color_id",
    name: "Palette",
    type: "color",
    //default: "ff0000",
  },
  //   {
  //     id: "boolean_id",
  //     name: "A boolean",
  //     type: "boolean",
  //     //default: true,
  //   },
  //   {
  //     id: "string_id",
  //     name: "A string",
  //     type: "string",
  //     //default: "hello",
  //     options: {
  //       minLength: 1,
  //       maxLength: 64,
  //     },
  //   },
];

export { params };
