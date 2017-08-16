class Student {
  private rollNo: number;
  private name: string;
  constructor(_rollNo: number, _name: string) {
    this.rollNo = _rollNo;
    this.name = _name;
  }
  showDetails() {
    //public : by default
    console.log(this.rollNo + " : " + this.name);
  }
}
let s1 = new Student(1, "Sivaprabu Ganesan");
s1.showDetails();
let s2 = new Student(2, "Pranav Sivaprabu");
s2.showDetails();