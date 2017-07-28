var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WebDeveloper = (function (_super) {
    __extends(WebDeveloper, _super);
    function WebDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebDeveloper.prototype.writeTypeScript = function () {
    };
    return WebDeveloper;
}(Developer));
var webdev = new WebDeveloper();
webdev.department = 'Software Engineering';
webdev.favoriteEditor = 'Visual Studio Code';
var Engineer = (function () {
    function Engineer() {
    }
    Engineer.prototype.logID = function () {
        return this.name + "_" + this.title;
    };
    return Engineer;
}());
//# sourceMappingURL=extend.js.map