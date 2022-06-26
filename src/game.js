import * as PIXI from 'pixi.js';
import { Player } from './player';
import { Bird } from './enemy';
import { BirdTwo } from './enemyr';
import backgroundImage from './images/background2.png';
import spriteImage from './images/sprite1.png';
import spriteBird from './images/enemysprite1.png';
import spriteBird2 from './images/enemysprite2.png';
import overallMusic from 'url:./music/jackmenumusic.mp3';
// Game
var Game = /** @class */ (function () {
    // Constructor
    // Loading assets
    function Game() {
        var _this = this;
        this.playerTextures = [];
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
            .add('birdTexture2', spriteBird2);
        this.loader.load(function () { return _this.loadCompleted(); });
    }
    Game.prototype.loadCompleted = function () {
        var _this = this;
        // Loading background
        var background = new PIXI.Sprite(this.loader.resources["backgroundTexture"].texture);
        // Adding background
        this.pixi.stage.addChild(background);
        // Loading and playing music
        var playMusic = this.loader.resources["menuMusic"].data;
        // playMusic.play()
        // Adding & loading player
        this.player = new Player(this.loader.resources["playerTexture"].texture);
        this.pixi.stage.addChild(this.player);
        // Adding & loading enemy Bird (left)
        this.enemy = new Bird(this.loader.resources["birdTexture"].texture, this.loader.resources["birdTexture2"].texture);
        this.pixi.stage.addChild(this.enemy);
        // Adding & loading enemy Bird (left)
        this.enemytwo = new Bird(this.loader.resources["birdTexture"].texture, this.loader.resources["birdTexture2"].texture);
        this.pixi.stage.addChild(this.enemytwo);
        // Adding & loading enemy Bird (right)
        this.enemyr = new BirdTwo(this.loader.resources["birdTexture"].texture, this.loader.resources["birdTexture2"].texture);
        this.pixi.stage.addChild(this.enemyr);
        // Adding & loading enemy Bird (right)
        this.enemyrtwo = new BirdTwo(this.loader.resources["birdTexture"].texture, this.loader.resources["birdTexture2"].texture);
        this.pixi.stage.addChild(this.enemyrtwo);
        this.pixi.ticker.add(function (delta) { return _this.update(delta); });
    };
    Game.prototype.update = function (delta) {
        //this.player.update()
        this.enemy.update();
        this.enemytwo.update();
        this.enemyr.update();
        this.enemyrtwo.update();
        // Collision detection throughout console log
        if (this.collision(this.enemy, this.player)) {
            console.log("Player touches bird");
        }
    };
    Game.prototype.collision = function (sprite1, sprite2) {
        var bounds1 = sprite1.getBounds();
        var bounds2 = sprite2.getBounds();
        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    };
    return Game;
}());
export { Game };
new Game();
//# sourceMappingURL=game.js.map