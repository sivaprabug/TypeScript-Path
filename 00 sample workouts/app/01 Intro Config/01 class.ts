class Program {
  constructor(private msg: string) {}
  showDetails() {
    console.log("Your message is : " + this.msg);
  }
}
let obj = new Program("Hello TypeScript");
obj.showDetails();
