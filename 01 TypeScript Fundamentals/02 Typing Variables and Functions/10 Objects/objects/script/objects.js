/*var square = { h: 10, w: 20 };

var points: Object = { x: 10, y: 20 };

var multiply = function (x: number) {
    return x * x;
};

var multiplyMore: Function;

multiplyMore = function (x: number) {
    return x * x;
};
*/
var demo_02_06;
(function (demo_02_06) {
    // Object
    var points1 = { x: 10, y: 20 };
    var x = points1.x;
    var points2 = { x: 10, y: 20 };
    var points3 = { x: 1 };
    var rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    console.log("rest area => " + rectangle.calcArea());
    var squareIt1 = function (x) {
        return x * x;
    };
    var val1 = squareIt1(2);
    console.log('squareIt1 = ' + val1);
    var val1 = squareIt1(8);
    console.log('squareIt1 = ' + val1);
    var squareIt = function (rect) {
        if (rect.w === undefined) {
            rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var sq1 = squareIt({ h: 10 });
    console.log('Rectangale h and w of 10 = ' + sq1);
    var sq2 = squareIt({ h: 10, w: 40 });
    console.log('Rectangale h and w of 10 = ' + sq2);
})(demo_02_06 || (demo_02_06 = {}));
//# sourceMappingURL=objects.js.map