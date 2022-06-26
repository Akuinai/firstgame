import * as PIXI from 'pixi.js'
import { Game } from "./game"
import link from "./game.html"
import backgroundImage from './images/background2.png'
import logoImage from './images/startscreenlogo.png'
import { startScreenLogo } from './startScreenLogo'

// App (Start screen)

export class App{

// Canvas game
// private pixiWidth =  800;
// private pixiHeight =  600;

// Globals

private pixi:   PIXI.Application
private loader: PIXI.Loader
private logo: startScreenLogo
private playerTextures: PIXI.Texture[] = [];

// Costructor
// Loading assets

    constructor(){

        // this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
        this.pixi = new PIXI.Application({ width: 800, height: 600 });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);

        this.loader = new PIXI.Loader();
        this.loader.add('backgroundTexture', backgroundImage)
                    .add('logoTexture', logoImage);
        this.loader.load(()=>this.loadCompleted());
    }
      private loadCompleted(): void {
        // Loading background
        let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
        
        // background.height = this.pixiHeight;
        // background.width = this.pixiWidth;

        // Adding background
         this.pixi.stage.addChild(background);
        
        // Adding logo
        this.logo = new startScreenLogo(this.loader.resources["logoTexture"].texture!)
        this.pixi.stage.addChild(this.logo);

        this.logo.interactive = true;
        this.logo.buttonMode = true;
        this.logo.on('pointerdown', () => this.onClick());
    }

    // Switches url location 
    onClick() {
        console.log('click');
        window.location.href = "game.html";
        // // window.location.href="game.html";
        //  document.getElementsByTagName('canvas')[0].remove();
        // new Game();
    }
}

new App();