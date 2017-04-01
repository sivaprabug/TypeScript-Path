var x = 1;

var y;

var a: any = 2;

var firstName: string = "Pranav";
var lastName = "Sivaprabu";


var num1 = 10;
var num2: number = 20;

function addNumbers(a, b, c) {
    var result = a + b + c;
    var msg = "The sum of number is" + result;
    alert(msg);
}

addNumbers(num1, num2, lastName);


function addNumbersOther(a: number, b: number, c: number) {
    var result = a + b + c;
    var msg = "The sum of number is" + result;
    alert(msg);
}

addNumbersOther(num1, num2, 7);