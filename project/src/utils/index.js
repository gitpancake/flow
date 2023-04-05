const noiseScaleName = (noiseScale) => {
  if (noiseScale < 1750) {
    return "Discovery";
  } else if (noiseScale <= 2500) {
    return "Falling";
  } else if (noiseScale <= 3500) {
    return "Freedom";
  } else if (noiseScale <= 4500) {
    return "Surrounding";
  }
};

const distanceName = (distance) => {
  if (distance < 100) {
    return "Intimacy";
  } else if (distance <= 200) {
    return "Sensuality";
  } else if (distance <= 300) {
    return "Passion";
  } else if (distance <= 400) {
    return "Nurturing";
  }
};

const noiseMultiplierName = (noiseMultiplier) => {
  if (noiseMultiplier <= TWO_PI) {
    return "Gratitude";
  } else if (noiseMultiplier <= 50) {
    return "Enfolding";
  } else if (noiseMultiplier <= 100) {
    return "Cocooning";
  } else if (noiseMultiplier <= 150) {
    return "Endearing";
  } else {
    return "Embracing";
  }
};

const frameRateName = (frameRate) => {
  if (frameRate <= 50) {
    return "Discovering";
  } else if (frameRate <= 100) {
    return "Seeking";
  } else if (frameRate <= 150) {
    return "Exploring";
  } else {
    return "Flowing";
  }
};

const speedName = (speed) => {
  if (speed <= 1) {
    return "Slow";
  } else if (speed <= 2) {
    return "Steady";
  } else if (speed <= 3) {
    return "Fast";
  } else {
    return "Rapid";
  }
};

const velocityDividerName = (velocityDivider) => {
  if (velocityDivider <= 4) {
    return "Sitting";
  } else if (velocityDivider <= 5) {
    return "Walking";
  } else if (velocityDivider <= 6) {
    return "Jogging";
  } else if (velocityDivider <= 7) {
    return "Running";
  } else {
    return "Dancing";
  }
};

export { noiseScaleName, distanceName, noiseMultiplierName, frameRateName, speedName, velocityDividerName };
