import * as PIXI from 'pixi.js'
import { Game } from './game.js'

export class BirdTwo extends PIXI.Sprite {
    private speed = 10;
    textureOne: PIXI.Texture;
    textureTwo : PIXI.Texture;

    constructor(texture: PIXI.Texture, textureTwo: PIXI.Texture) {
        super(texture);

        this.textureOne = texture;
        this.textureTwo = textureTwo;

        this.anchor.set(0);

        // let elapsed = 0.0;

        // this.x = 80;
        this.y = Math.random() * 400;
    }

    update() {
        // Creating speed 
        this.x -= 2
        // If 'x' has a certain position, send bird beginning position 
        if (this.x < -200) {
            this.x = 1000
        }
        
        // Swapping textures
        if(this.x % 40 == 0){
            this.texture = this.textureTwo;
        }else if(this.x % 20 == 0){
            this.texture = this.textureOne;
        }
    }
}

 