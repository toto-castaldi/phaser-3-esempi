/*
 * https://photonstorm.github.io/phaser3-docs/Phaser.Geom.Intersects.html 
 */

Scene = class extends Phaser.Scene {

    constructor() {
        super({
            key: "scene"
        })

        this.objectDim = game.config.width / 5;
        this.velocity = 0.15;


    }

    preload() {
        this.load.image("a", "assets/star.png");
        this.load.image("b", "assets/pentagon.png");
        this.load.image("wall", "assets/rectangle.png");
    }

    create() {
        this.objectA = this.add.sprite(this.objectDim / 2, game.config.height / 2, "a");

        //le dimensioni effettive dello sprite cambiano
        this.objectA.displayWidth = this.objectDim;
        this.objectA.displayHeight = this.objectDim;

        this.objectB = this.add.sprite(game.config.width - this.objectDim / 2, game.config.height / 2, "b");
        this.objectB.displayWidth = this.objectDim;
        this.objectB.displayHeight = this.objectDim;

        this.wall = this.add.sprite(game.config.width / 2, game.config.height / 2, "wall");
        this.wall.displayWidth = this.objectDim;
        this.wall.displayHeight = game.config.height;
        this.wall.depth = 1;

    }

    update(passed, delta) {

        this.objectA.x += delta * this.velocity;
        this.objectB.x -= delta * this.velocity;

        //restituisce un rettangolo corrispondente ai bordi dello sprite
        let rectA = this.objectA.getBounds();
        let rectB = this.objectB.getBounds();

        //si intersecano ?
        if (Phaser.Geom.Intersects.RectangleToRectangle(rectA, rectB)) {
            this.objectA.setTint(0x1e14cc);
            this.objectB.setTint(0x0f3cdb);
        } else {
            this.objectA.clearTint();
            this.objectB.clearTint();
        }

        if (this.objectA.x > game.config.width - this.objectDim / 2 ||
            this.objectB.x < this.objectDim / 2) {
            this.objectA.x = this.objectDim / 2;
            this.objectB.x = game.config.width - this.objectDim / 2;
            this.velocity = Phaser.Math.FloatBetween(0.1, 0.2);
        }


    }


}