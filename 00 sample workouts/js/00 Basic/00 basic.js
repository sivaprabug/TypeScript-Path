var Student = (function () {
    function Student(_rollNo, _name) {
        this.rollNo = _rollNo;
        this.name = _name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.rollNo + " : " + this.name);
    };
    return Student;
}());
var s1 = new Student(1, "Sivaprabu Ganesan");
s1.showDetails();
var s2 = new Student(2, "Pranav Sivaprabu");
s2.showDetails();
//# sourceMappingURL=00 basic.js.map