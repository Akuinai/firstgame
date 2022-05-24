import * as PIXI from 'pixi.js'
import { Game } from './game'
import { Ship } from './ship';

export class Player extends PIXI.Sprite{

constructor(texture: PIXI.Texture){
    super(texture);

    this.anchor.set(0.5);

    let elapsed = 0.0;

    this.x = 200 + Math.cos(elapsed/100.0) * 350.0;
    this.y = 485;
    }

    update(delta: number){
        this.x += delta 
    }
}

