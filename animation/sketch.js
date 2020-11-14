Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        for (let i = 0; i < 10; i++) {
            this.load.spritesheet(`walk${i}`, `assets/boxer-game-sprite-oga/2-Walk/1-Forward/__Boxer2_Forward_00${i}.png`, { frameWidth : 744, frameHeight : 711 });
        }
        this.load.image(`idle`, `assets/boxer-game-sprite-oga/1-Idle/__Boxer2_Idle_000.png`);
    }

    create() {
        this.sprite = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "idle");

        this.anims.create({
            key: "walk",
            frames: [{ key: "walk0", frame: 0 }, { key: "walk1", frame: 0 }, { key: "walk2", frame: 0 }, { key: "walk3", frame: 0 }, { key: "walk4", frame: 0 }, { key: "walk5", frame: 0 }, { key: "walk6", frame: 0 }, { key: "walk7", frame: 0 }, { key: "walk8", frame: 0 }, { key: "walk9", frame: 0 }]
        });

    }

    update() {
        this.sprite.anims.play("walk", true);
    }

}