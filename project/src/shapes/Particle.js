import { FXRandomBetween, FXRandomBool } from "../utils/fxrandHelper";

class Particle {
  constructor(_loc, _dir, _config, _sketchCanvas) {
    this.loc = _loc;
    this.dir = _dir;
    this.config = _config;
    this.sketchCanvas = _sketchCanvas;
  }

  run() {
    this.move();
    this.checkEdges();
    this.update();
  }

  move() {
    let angle = noise(this.loc.x / this.config.noiseScale, this.loc.y / this.config.noiseScale, frameCount / this.config.noiseScale) * this.config.noiseMultiplier * this.config.noiseStrength;

    let directionAngle;

    const shouldGo = FXRandomBool(0.9);

    if (shouldGo) {
      directionAngle = tan(-angle * 180);

      this.dir.x = atan(-angle * PI * PI * PI);
      this.dir.y = acos(directionAngle);
    } else {
      directionAngle = cos(-angle * 180);

      this.dir.x = tan(-angle * PI * PI * PI);
      this.dir.y = cos(directionAngle);
    }

    var vel = this.dir.copy();

    vel.mult((this.config.speed * this.config.directionChange) / this.config.velocityDivider); //vel = vel * (speed*d)

    this.loc.add(vel);
  }

  checkEdges() {
    var distance = dist(this.sketchCanvas.width / 2, this.sketchCanvas.height / 2, this.loc.x, this.loc.y);

    const isOutOfBounds = () => {
      return this.loc.x < this.config.borderWidth || this.loc.x > width - this.config.borderWidth || this.loc.y < this.config.borderWidth || this.loc.y > height - this.config.borderWidth;
    };

    if (distance > this.sketchCanvas.width - this.config.borderWidth || isOutOfBounds()) {
      this.loc.x = FXRandomBetween(this.config.borderWidth, width - this.config.borderWidth);
      this.loc.y = FXRandomBetween(this.config.borderWidth, height - this.config.borderWidth);
    }
  }

  update() {
    fill(0, 5, 0, 0.25);

    stroke(this.config.palette.color);
    point(this.loc.x, this.loc.y);

    if (this.config.palette.name === "Wisp") {
      point(this.loc.x + 1, this.loc.y + 1);
    }
  }
}

export { Particle };
