import * as PIXI from 'pixi.js'
import { App } from './app'
import { Player } from './player';
import { Assets } from './assets';
import backgroundImage from './images/background2.png'
import spriteImage from './images/sprite1.png'
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
    private   playerTextures: PIXI.Texture[] = [];
    
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
        this.loader.load(()=>this.loadCompleted());
    }
    private loadCompleted(): void {
        // Loading background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        let playMusic = this.loader.resources["menuMusic"].data!
        playMusic.play()

        // background.height = this.pixiHeight;
        // background.width = this.pixiWidth;

        // Adding background
        this.pixi.stage.addChild(background);

        // Adding player
        this.player = new Player(this.loader.resources["playerTexture"].texture!)
        this.pixi.stage.addChild(this.player)

        this.pixi.ticker.add((delta)=> this.update(delta)); 
}

update(delta: number){
    
    }
}

new Game();
