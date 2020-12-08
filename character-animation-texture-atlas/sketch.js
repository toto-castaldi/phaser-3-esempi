gameOptions = {
    vel: 200,
}
Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.multiatlas("texture", "assets/texture.json", "/assets");
    }

    create() {
        this.player = this.physics.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "texture", "barmaid-idle/Barmaid_idle-0.png");
        this.cursors = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: "player-idle-down",
            frames: this.anims.generateFrameNames("texture", { start: 0, end: 3, prefix : "barmaid-idle/Barmaid_idle-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-walk-down",
            frames: this.anims.generateFrameNames("texture", { start: 0, end: 3, prefix : "barmaid-walk/Barmaid_walk-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-idle-left",
            frames: this.anims.generateFrameNames("texture", { start: 4, end: 7, prefix : "barmaid-idle/Barmaid_idle-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-walk-left",
            frames: this.anims.generateFrameNames("texture", { start: 4, end: 7, prefix : "barmaid-walk/Barmaid_walk-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-idle-right",
            frames: this.anims.generateFrameNames("texture", { start: 8, end: 11, prefix : "barmaid-idle/Barmaid_idle-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-walk-right",
            frames: this.anims.generateFrameNames("texture", { start: 8, end: 11, prefix : "barmaid-walk/Barmaid_walk-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-idle-up",
            frames: this.anims.generateFrameNames("texture", { start: 12, end: 15, prefix : "barmaid-idle/Barmaid_idle-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.anims.create({
            key: "player-walk-up",
            frames: this.anims.generateFrameNames("texture", { start: 12, end: 15, prefix : "barmaid-walk/Barmaid_walk-", suffix : ".png" }),
            frameRate : 7,
            repeat : -1
        });
        this.player.anims.play("player-idle-down", true);
    }

    update() {

        this.player.setVelocity(0);
         
        
        if (this.cursors.right.isDown) {
            this.player.anims.play("player-walk-right", true);
            this.player.setVelocityX(gameOptions.vel);
        } else if (this.cursors.left.isDown) {
            this.player.anims.play("player-walk-left", true);
            this.player.setVelocityX(-gameOptions.vel);
        } else if (this.cursors.down.isDown) {
            this.player.anims.play("player-walk-down", true);
            this.player.setVelocityY(gameOptions.vel);
        } else if (this.cursors.up.isDown) {
            this.player.anims.play("player-walk-up", true);
            this.player.setVelocityY(-gameOptions.vel);
        } else {
            const dir = this.player.anims.currentAnim.key.split("-")[2];
            this.player.anims.play(`player-idle-${dir}`, true);
        }
    }

}
Scene.gameConfig = {
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    width: 800,
    height: 800,
    scene: [Scene],
    parent: "sketch-holder",
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}