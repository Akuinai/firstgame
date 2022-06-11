import * as PIXI from 'pixi.js'
import backgroundImage from './images/background2.png'
import spriteImage from './images/sprite1.png'
import { Player } from './player';
import { Assets } from './assets';

// Game

export class Game {

// Canvas game
    private pixiWidth =  1420;
    private pixiHeight =  770;

// Globals

    private  pixi:   PIXI.Application
    private  loader: PIXI.Loader
    public   player: Player
    public   playerTextures: PIXI.Texture[] = [];
    
// Constructor
// Loading assets

    constructor(){

        this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('backgroundTexture', backgroundImage)
                   .add('playerTexture', spriteImage);
        this.loader.load(()=>this.loadCompleted());

        this.pixi.loader.add("spritesheet", "spritesheet.json");
        this.pixi.loader.load(() => this.loadCompleted());
    }
    loadCompleted() {
        // Adding background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        background.height = this.pixiHeight;
        background.width = this.pixiWidth;

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
