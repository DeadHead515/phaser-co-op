import * as Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload() {
      this.load.image("foreground", "assets/foreground.png");
    },
    create() {
      this.add.image(400, 300, "foreground");
    },
    update() {},
  },
};

const game = new Phaser.Game(config);
