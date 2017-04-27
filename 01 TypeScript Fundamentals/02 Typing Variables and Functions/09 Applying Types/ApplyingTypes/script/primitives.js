var demo_02_05;
(function (demo_02_05) {
    //any type
    var data;
    var info;
    var doSomething = function (arg) {
        return arg;
    };
    // var x =  doSomething(5);
    //Number
    var age = 2;
    var score = 98.25;
    var rating = 98.25;
    //Boolean
    var hasData = true;
    var isReady = true;
    var isBald = function () {
        return 'yes';
    };
    var hasHair = isBald;
    var hasHairs = isBald();
    var hasHairss = !!isBald();
    //String Array
    function getArrayLength(x) {
        var len = x[0].length;
        return len;
    }
    var names = ['John', 'Dan', 'Aarom', 'Fritz'];
    var firstPerson;
    firstPerson = names[0];
    console.log(getArrayLength(names));
    var firstName = 'John';
    var lastName = 'Papa';
    // Null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    // undefined
    console.log("undefined Examples");
    var quantity;
    console.log("quantity => ", quantity);
    var company = undefined;
    console.log("company => ", company);
})(demo_02_05 || (demo_02_05 = {}));
//# sourceMappingURL=primitives.js.map