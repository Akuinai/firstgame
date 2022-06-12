import * as PIXI from 'pixi.js'
import { Game } from './game.js'

export class startScreenLogo extends PIXI.Sprite{
private speed = 10;

constructor(texture: PIXI.Texture){
    super(texture);

    this.anchor.set(0.5);

    let elapsed = 0.0;

    this.x = 65 + Math.cos(elapsed/150.0) * 350.0;
    this.y = 250;
    }
}