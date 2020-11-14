Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.image("boxer", "assets/boxer-game-sprite-oga/1-Idle/__Boxer2_Idle_000.png");
    }

    create() {
        this.graphics = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "boxer");
    }

}