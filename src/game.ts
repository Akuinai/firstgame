import * as PIXI from 'pixi.js'
import { App } from './app'
import { Player } from './player';
import { Bird } from './enemy';
import { BirdTwo } from './enemyr';
import { Assets } from './assets';
import backgroundImage from './images/background2.png'
import spriteImage from './images/sprite1.png'
import spriteBird from './images/enemysprite1.png'
import spriteBird2 from './images/enemysprite2.png'
import overallMusic from 'url:./music/jackmenumusic.mp3'


// Game

export class Game {

// Globals

    private  pixi:   PIXI.Application
    private  loader: PIXI.Loader
    private  player: Player
    private enemy: Bird
    private enemytwo : Bird
    private enemyr: BirdTwo
    private enemyrtwo : BirdTwo
    private  playerTextures: PIXI.Texture[] = [];
    
// Constructor
// Loading assets

    constructor(){

        // this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
        this.pixi = new PIXI.Application({ width: 800, height: 600 });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('backgroundTexture', backgroundImage)
                   .add('playerTexture', spriteImage)
                   .add('menuMusic', overallMusic)
                   .add('birdTexture', spriteBird)
                   .add('birdTexture2', spriteBird2)
                   
        this.loader.load(()=>this.loadCompleted());
    }
    public loadCompleted(): void {

        // Loading background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        // Adding background
        this.pixi.stage.addChild(background);

        // Loading and playing music
        let playMusic = this.loader.resources["menuMusic"].data!
        // playMusic.play()

        // Adding & loading player
        this.player = new Player(this.loader.resources["playerTexture"].texture!);
        this.pixi.stage.addChild(this.player)

        // Adding & loading enemy Bird (left)
        this.enemy = new Bird(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
        this.pixi.stage.addChild(this.enemy)

         // Adding & loading enemy Bird (left)
         this.enemytwo = new Bird(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
         this.pixi.stage.addChild(this.enemytwo)

        // Adding & loading enemy Bird (right)
        this.enemyr = new BirdTwo(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
        this.pixi.stage.addChild(this.enemyr)

         // Adding & loading enemy Bird (right)
         this.enemyrtwo = new BirdTwo(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
         this.pixi.stage.addChild(this.enemyrtwo)

        this.pixi.ticker.add((delta)=> this.update(delta)); 
}

update(delta: number){
        //this.player.update()
        this.enemy.update()

        this.enemytwo.update()

        this.enemyr.update()

        this.enemyrtwo.update()

        if(this.collision(this.enemy, this.player)){
            console.log("Player touches bird")
        }
    }

    collision(sprite1:PIXI.Sprite, sprite2:PIXI.Sprite) {
        const bounds1 = sprite1.getBounds()
        const bounds2 = sprite2.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }

}

new Game();
