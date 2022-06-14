import * as PIXI from 'pixi.js'
import { Game } from './game.js'

export class Player extends PIXI.Sprite{
private speed = 10;

constructor(texture: PIXI.Texture){
    super(texture);

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    this.anchor.set(0.5);

    let elapsed = 0.0;

    this.x = 50 + Math.cos(elapsed/150.0) * 350.0;
    this.y = 368;
    }

   private  onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "ARROWLEFT":
                this.x -= this.speed;
                console.log('Goes left')
                break;
            case "D":
            case "ARROWRIGHT":
                this.x += this.speed;
                console.log('Goes right')
                break;
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        // Vraag Leanne waarom ik deze leeg moet houden
        // switch (e.key.toUpperCase()) {
        //     case " ":
        //         break;
        //     case "A":
        //     case "D":
        //     case "ARROWLEFT":
        //     case "ARROWRIGHT":
        //         this.speed = 0
        //         break
            // case "W":
            // case "S":
            // case "ARROWUP":
            // case "ARROWDOWN":
            //     this.speed = 0
            //     break
        // }
}

    // update(delta: number){
    //     this.x += delta 
    // }
}

