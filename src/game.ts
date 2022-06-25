import * as PIXI from 'pixi.js'
import { App } from './app'
import { Player } from './player';
import { Bird } from './enemy';
import { Assets } from './assets';
import backgroundImage from './images/background2.png'
import spriteImage from './images/sprite1.png'
import spriteBird from './images/enemysprite1.png'
import spriteBird2 from './images/enemysprite2.png'
import overallMusic from 'url:./music/jackmenumusic.mp3'


// Game

export class Game {

// Canvas game
    // private pixiWidth =  800;
    // private pixiHeight =  600;

// Globals

    private  pixi:   PIXI.Application
    private  loader: PIXI.Loader
    private  player: Player
    private enemy: Bird
    private enemytwo : Bird
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
    private loadCompleted(): void {
        console.log("yoooo")
        // Loading background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        // Adding background
        this.pixi.stage.addChild(background);

        // Loading and playing music
        let playMusic = this.loader.resources["menuMusic"].data!
        // playMusic.play()

        // background.height = this.pixiHeight;
        // background.width = this.pixiWidth;

        // Adding & loading player
        this.player = new Player(this.loader.resources["playerTexture"].texture!);
        this.pixi.stage.addChild(this.player)

        // Adding & loading enemy Bird
        this.enemy = new Bird(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
        this.pixi.stage.addChild(this.enemy)

         // Adding & loading enemy Bird
         this.enemytwo = new Bird(this.loader.resources["birdTexture"].texture!, this.loader.resources["birdTexture2"].texture!);
         this.pixi.stage.addChild(this.enemytwo)

        this.pixi.ticker.add((delta)=> this.update(delta)); 
}

update(delta: number){
        //this.player.update()
        this.enemy.update()

        this.enemytwo.update()
    }
}

new Game();
