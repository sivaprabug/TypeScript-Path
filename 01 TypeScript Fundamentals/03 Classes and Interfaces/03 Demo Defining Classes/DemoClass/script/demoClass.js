var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        console.info('Car engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(300, "BMW");
    var car = new Car(engine);
    console.log(car.engine.engineType);
    car.start();
};
//# sourceMappingURL=demoClass.js.map