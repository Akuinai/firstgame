import * as PIXI from 'pixi.js';
import backgroundImage from './images/background2.png';
import logoImage from './images/startscreenlogo.png';
import { startScreenLogo } from './startScreenLogo';
// App (Start screen)
var App = /** @class */ (function () {
    // Costructor
    // Loading assets
    function App() {
        var _this = this;
        this.playerTextures = [];
        // this.pixi = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
        this.pixi = new PIXI.Application({ width: 800, height: 600 });
        this.pixi.stage.interactive = true;
        this.pixi.stage.hitArea = this.pixi.renderer.screen;
        document.body.appendChild(this.pixi.view);
        this.loader = new PIXI.Loader();
        this.loader.add('backgroundTexture', backgroundImage)
            .add('logoTexture', logoImage);
        this.loader.load(function () { return _this.loadCompleted(); });
    }
    App.prototype.loadCompleted = function () {
        var _this = this;
        // Loading background
        var background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture);
        // background.height = this.pixiHeight;
        // background.width = this.pixiWidth;
        // Adding background
        this.pixi.stage.addChild(background);
        // Adding logo
        this.logo = new startScreenLogo(this.loader.resources["logoTexture"].texture);
        this.pixi.stage.addChild(this.logo);
        this.logo.interactive = true;
        this.logo.buttonMode = true;
        this.logo.on('pointerdown', function () { return _this.onClick(); });
    };
    // Switches url location 
    App.prototype.onClick = function () {
        console.log('click');
        window.location.href = "game.html";
        // // window.location.href="game.html";
        //  document.getElementsByTagName('canvas')[0].remove();
        // new Game();
    };
    return App;
}());
export { App };
new App();
//# sourceMappingURL=app.js.map