var demo_02_08;
(function (demo_02_08) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    //(rect: { h: number; w?: number; }) => number;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        console.info('rect.h => ' + rect.h);
        console.info('rect.w => ' + rect.w);
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    var val2 = squareIt(rectA);
    console.log('rectangle h and w of 7 = ' + val2);
    var val3 = squareIt(rectB);
    console.log('rectangle h of 7 and width of 12 = ' + val3);
})(demo_02_08 || (demo_02_08 = {}));
//# sourceMappingURL=functionInterfaces.js.map