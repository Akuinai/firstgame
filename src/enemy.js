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
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(texture, textureTwo) {
        var _this = _super.call(this, texture) || this;
        _this.speed = 10;
        _this.pivot.set(0.5);
        _this.textureOne = texture;
        _this.textureTwo = textureTwo;
        _this.scale.set(-1, 1);
        _this.anchor.set(-0.5);
        var elapsed = 0.0;
        _this.x = 80;
        _this.y = Math.random() * 400;
        return _this;
    }
    Bird.prototype.update = function () {
        // Creating speed
        this.x += 2;
        // If 'x' has a certain position, send bird beginning position 
        if (this.x > 1000) {
            this.x = -200;
        }
        // Swapping textures
        if (this.x % 40 == 0) {
            this.texture = this.textureTwo;
        }
        else if (this.x % 20 == 0) {
            this.texture = this.textureOne;
        }
    };
    return Bird;
}(PIXI.Sprite));
export { Bird };
//# sourceMappingURL=enemy.js.map