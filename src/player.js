var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as PIXI from 'pixi.js';
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(texture) {
        var _this = _super.call(this, texture) || this;
        _this.speed = 10;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        _this.anchor.set(0.5);
        var elapsed = 0.0;
        _this.x = 50 + Math.cos(elapsed / 150.0) * 350.0;
        _this.y = 368;
        return _this;
    }
    // Keyboard 
    Player.prototype.onKeyDown = function (e) {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "ARROWLEFT":
                this.x -= this.speed;
                console.log('Goes left');
                break;
            case "D":
            case "ARROWRIGHT":
                this.x += this.speed;
                console.log('Goes right');
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
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
    };
    return Player;
}(PIXI.Sprite));
export { Player };
//# sourceMappingURL=player.js.map