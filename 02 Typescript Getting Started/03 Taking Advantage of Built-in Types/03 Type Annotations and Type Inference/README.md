# 03 Taking Advantage of Built-in Types - Type Annotations and Type Inference

```javascript
var a = "Sivaprabu";
console.log(a);
//console.log(b);

//console.log(someString);
let someString = 'Hello World';
console.log(someString);

var x: string = 'I will forever be a string.';
console.log(x);
x = 42;
console.log(x);

var y = 'I will forever be a string.';
console.log(y);
y = 42;
console.log(y);

function getSomeValue() {
    var myName: string = 'Siva';
    return myName;
}

let z:number = getSomeValue();
console.log(z);
```