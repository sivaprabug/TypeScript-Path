module demo_02_05 {
    //any type
    var data: any;
    var info;
    var doSomething: any = function (arg: any) {
        return arg;
    }
    // var x =  doSomething(5);

    //Number
    var age: number = 2;
    var score: number = 98.25;
    var rating = 98.25;

    //Boolean
    var hasData: boolean = true;
    var isReady = true;

    var isBald = function () {
        return 'yes';
    }

    var hasHair = isBald;
    var hasHairs = isBald();

    var hasHairss = !!isBald();


    //String Array

    function getArrayLength(x: string[]) {
        var len = x[0].length;
        return len;
    }

    var names: string[] = ['John', 'Dan', 'Aarom', 'Fritz'];

    var firstPerson: string;
    firstPerson = names[0];

    console.log(getArrayLength(names));

    var firstName: string = 'John';
    var lastName = 'Papa';

    // Null

    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;


    // undefined
    console.log("undefined Examples");
    var quantity: number;
    console.log("quantity => ", quantity);
    var company = undefined;
    console.log("company => ", company);
}