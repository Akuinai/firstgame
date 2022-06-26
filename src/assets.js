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
var Assets = /** @class */ (function (_super) {
    __extends(Assets, _super);
    function Assets(game) {
        var _this = _super.call(this) || this;
        _this.assets = [];
        _this.assets = [
            // Add assets
            { name: "spritesheetJson", url: "spritesheet.json" }
        ];
        _this.assets.forEach(function (asset) {
            // Add to loader
            _this.add(asset.name, asset.url);
        });
        // for (const assets of this.assets){
        //     this.add(assest.name, asset.url)
        // }
        _this.onError.add(function (arg) { console.error(arg); });
        _this.onProgress.add(function (loader) { return _this.showProgress(loader); });
        // call load and point to callback
        _this.load(function () { return game.loadCompleted(); });
        return _this;
    }
    Assets.prototype.showProgress = function (loader) {
        console.log("Loading ".concat(loader.progress, "%"));
    };
    return Assets;
}(PIXI.Loader));
export { Assets };
//# sourceMappingURL=assets.js.map