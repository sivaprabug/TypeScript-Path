var squareit = function (x) { return x * x; };
var result = squareit(4);
console.log("result ", result);
var adder = function (a, b) { return a + b; };
var sum = adder(2, 3);
console.log("sum ", sum);
var greeting = function () { return console.log('Hello World!'); };
greeting();
var scores = [10, 20, 30, 40, 50];
var highScores;
highScores = scores.filter(function (element, index, array) {
    if (element > 35) {
        return true;
    }
});
console.log("highScores ", highScores);
//# sourceMappingURL=test.js.map