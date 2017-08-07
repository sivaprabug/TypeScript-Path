class Customer {
  //instance members with access modifiers
  constructor(
    private id: number,
    public name: string,
    protected address: string
  ) {}
  showDetails() {
    console.log(this.id + " : " + this.name + " : " + this.address);
  }
}
let c1 = new Customer(1, "Sivaprabu Ganesan", "Chennai");
c1.showDetails();
