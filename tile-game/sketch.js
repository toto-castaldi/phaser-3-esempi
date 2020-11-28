gameOptions = {
    vel: 100,
}
Scene = class extends Phaser.Scene {
    constructor() {
        super({
            key: "scene"
        })
    }

    preload() {
        this.load.tilemapCSV("map", "assets/grid.csv");
        this.load.image("tiles", "assets/sprute.png");
    }

    create() {
        //usando le tile creo il livello
        this.map = this.make.tilemap({ key: "map", tileWidth: 32, tileHeight: 32 });
        this.tileset = this.map.addTilesetImage("tiles");
        this.layer = this.map.createStaticLayer(0, this.tileset, 0, 0);

        //il tile con indice 2 genera collisione
        this.map.setCollision(2);

        //contesto grafico per disegnare
        let makeGraphics = this.make.graphics();
        makeGraphics.fillStyle(0x995632, 1);
        makeGraphics.fillCircle(16, 16, 16);
        //creo una texture
        makeGraphics.generateTexture("circle", 32, 32);

        //lo sprite del giocatore
        this.player = this.physics.add.sprite(16, 16, "circle");
        //non esce dal mondo
        this.player.setCollideWorldBounds(true);

        //i tasti cursore (le frecce)
        this.cursors = this.input.keyboard.createCursorKeys();

        //collisione tra il giocatore e il layer del livello
        this.physics.add.collider(this.player, this.layer);
    }

    update() {

        this.player.setVelocity(0);

        if (this.cursors.right.isDown) {
            this.player.setVelocityX(gameOptions.vel);
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-gameOptions.vel);
        }

        if (this.cursors.down.isDown) {
            this.player.setVelocityY(gameOptions.vel);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-gameOptions.vel);
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