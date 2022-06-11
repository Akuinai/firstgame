// import * as PIXI from 'pixi.js'
// import { Game } from './game.ts'
// import backgroundImage from './images/background2.png'
// import logoImage from './images/startscreenlogo.png'


// export class App{
// // Canvas game
// private pixiWidth =  1420;
// private pixiHeight =  770;

// // Globals

// private pixi:   PIXI.Application
// private loader: PIXI.Loader
// private playerTextures: PIXI.Texture[] = [];


// // Costructor
// // Loading assets

//     constructor(){

//         this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
//         this.pixi.stage.interactive = true;
//         this.pixi.stage.hitArea = this.pixi.renderer.screen;
//         document.body.appendChild(this.pixi.view);

//         this.loader = new PIXI.Loader();
//             this.loader.add('backgroundTexture', backgroundImage)
//                        .add('logoTexture', logoImage);
//         this.loader.load(()=>this.loadCompleted());
//     }
//         loadCompleted(): void {
//             // Adding background & logo
//         let background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture!);
//         let logo = new PIXI.Sprite(this.loader.resources["logoTexture"].texture!);
//         background.height = this.pixiHeight;
//         background.width = this.pixiWidth;
        
//         this.pixi.stage.addChild(background);
//         this.pixi.stage.addChild(logo);

//         logo.interactive = true;
//         logo.buttonMode = true;
//         logo.on('pointerdown', () => this.onClick());
//     }

//     onClick() {
//         console.log('klik');
//         window.location.href="game.html";
//         //  document.getElementsByTagName('canvas')[0].remove();
//         // new Game();
//     }
// }

// new App();