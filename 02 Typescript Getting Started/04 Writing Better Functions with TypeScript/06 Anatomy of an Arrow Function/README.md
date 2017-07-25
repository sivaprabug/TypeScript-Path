# 06 Writing Better Functions with TypeScript - Anatomy of an Arrow Function

- Added in **ES-2015** and adopted by TypeScript
- Anonymous function with very simple syntax
- parameters => function body

```javascript
let squareit = x => x*x;

let result = squareit(4); //14

let adder = (a,b) => a+b;
let sum =adder(2,3) //5

let greeting = () => console.log('Hello World!');
greeting();

let scores:number[] = [10,20,30,40,50];
let highScores:number[];

highScores = scores.filter((element, index, array) => {
if (element > 100) {
	return true;
}
});
```