import * as PIXI from 'pixi.js'
import { Game } from './game.js'

export class Bird extends PIXI.Sprite {
    private speed = 10;
    textureOne: PIXI.Texture;
    textureTwo : PIXI.Texture;

    constructor(texture: PIXI.Texture, textureTwo: PIXI.Texture) {
        super(texture);

        this.textureOne = texture;
        this.textureTwo = textureTwo;

        this.scale.set(-1, 1)

        this.anchor.set(0.5);

        let elapsed = 0.0;

        this.x = 80;

        this.y = Math.random() * 400;
    }

    update() {
        this.x += 2
        if (this.x > 1000) {
            this.x = -200
        }

        if(this.x % 40 == 0){
            this.texture = this.textureTwo;
        }else if(this.x % 20 == 0){
            this.texture = this.textureOne;
        }
    }
}

 