var Customer = (function () {
    function Customer(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Customer.prototype.showDetails = function () {
        console.log(this.id + " : " + this.name + " : " + this.address);
    };
    return Customer;
}());
var c1 = new Customer(1, "Sivaprabu Ganesan", "Chennai");
c1.showDetails();
//# sourceMappingURL=constructor.js.map