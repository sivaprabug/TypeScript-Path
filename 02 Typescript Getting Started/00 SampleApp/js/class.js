var Developer = (function () {
    function Developer() {
    }
    Object.defineProperty(Developer.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.documentRequirements = function (requirements) {
        console.log(requirements);
    };
    return Developer;
}());
//# sourceMappingURL=class.js.map