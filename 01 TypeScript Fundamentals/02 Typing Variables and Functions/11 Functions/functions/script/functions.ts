var myFun = function (h: number, w: number) {
    return h * w;
}
console.log(myFun(10, 20));


var myFun1 = (a: number, b: number) => a * b;
console.log(myFun1(10, 30));



var myFun2 = function (x, y) {
    return x * y;
}
console.log(myFun2(10, 40));



var greetMe: (msg: string) => void;
// greetMe('Hai Siva!')