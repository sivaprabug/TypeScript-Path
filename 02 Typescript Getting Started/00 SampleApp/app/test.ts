let logMessage = (message:string) => console.warn(message);
logMessage('Welcome to Multimath')

let squareit = (x: number) => x * x;

let result = squareit(4); //14
console.log("result ", result);

let adder = (a: number, b: number) => a + b;
let sum = adder(2, 3) //5
console.log("sum ", sum);

let greeting = () => console.log('Hello World!');
greeting();

let scores: number[] = [10, 20, 30, 40, 50];
let highScores: number[];

highScores = scores.filter((element, index, array) => {
    if (element > 35) {
        return true;
    }
});
console.log("highScores ", highScores);