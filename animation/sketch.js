/**
 * Creare animazioni con https://photonstorm.github.io/phaser3-docs/Phaser.Animations.AnimationManager.html#create__anchor
   https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Animation.html#play__anchor play di un'animazione 
 */

Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        for (let i = 0; i < 10; i++) {
            this.load.image(`walk${i}`,`assets/boxer-forward_00${i}.png`);
        }
        this.load.image(`idle`, `assets/boxer-game-sprite-oga/1-Idle/__Boxer2_Idle_000.png`);
    }

    create() {
        this.sprite = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "idle");

        this.anims.create({
            key: "walk",
            frames: [{ key: "walk0" }, { key: "walk1" }, { key: "walk2" }, { key: "walk3" }, { key: "walk4" }, { key: "walk5" }, { key: "walk6" }, { key: "walk7" }, { key: "walk8" }, { key: "walk9" }]
        });

    }

    update() {
        this.sprite.anims.play("walk", true);
    }

}