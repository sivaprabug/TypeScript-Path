var Program = (function () {
    function Program(msg) {
        this.msg = msg;
    }
    Program.prototype.showDetails = function () {
        console.log("Your message is : " + this.msg);
    };
    return Program;
}());
var obj = new Program("Hello TypeScript");
obj.showDetails();
//# sourceMappingURL=01 class.js.map