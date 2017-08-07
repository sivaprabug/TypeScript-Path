var Booklist = (function () {
    function Booklist(name) {
        this.name = name;
        this.books = [];
    }
    Booklist.prototype.addBook = function (book) {
        if (this.books.length >= Booklist.maxBookCount) {
            throw new Error("Booklist is full");
        }
        else {
            this.books.push(book);
            Booklist.totalBooksCount++;
        }
    };
    Booklist.totalBooks = function () {
        return Booklist.totalBooksCount;
    };
    Booklist.totalBooksCount = 0;
    Booklist.maxBookCount = 20;
    return Booklist;
}());
var booklist = new Booklist("My Book List");
var listName = booklist.name;
booklist.addBook("Gurukulsight - TypeScript Training Book");
booklist.addBook("Gurukulsight - Angular2 Training Book");
var maxBooks = Booklist.maxBookCount;
var totalBooks = Booklist.totalBooks();
console.log(maxBooks);
console.log(totalBooks);
//# sourceMappingURL=members.js.map