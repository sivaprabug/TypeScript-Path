class Booklist {
  //instance members
  private books: string[] = []; //instance property or instance member
  constructor(public name: string) {}
  addBook(book: string) {
    //member function or instance member function
    if (this.books.length >= Booklist.maxBookCount) {
      throw new Error("Booklist is full");
    } else {
      this.books.push(book);
      Booklist.totalBooksCount++;
    }
  }
  //static members
  static totalBooksCount: number = 0;
  static maxBookCount: number = 20;
  static totalBooks() {
    //static methods
    return Booklist.totalBooksCount;
  }
}
let booklist = new Booklist("My Book List");
// acessing instance members using class instance
let listName = booklist.name;
booklist.addBook("Gurukulsight - TypeScript Training Book");
booklist.addBook("Gurukulsight - Angular2 Training Book");

// accessing static members using class name
let maxBooks = Booklist.maxBookCount; //20
let totalBooks = Booklist.totalBooks(); //2
console.log(maxBooks);
console.log(totalBooks);
