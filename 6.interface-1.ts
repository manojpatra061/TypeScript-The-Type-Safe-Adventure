// interface → for objects only
interface Book {
  isbn: number;
  title: string;
  author: string;
  genre: string;
  // methods
  printAuthor(): void;
  printTitle(message: string): void;
  // another way to write methods
  printSomething: (message: string) => string;
}

// creating objects of that interface
const thinkAndGrowRich: Book = {
  isbn: 123,
  title: "think and grow rich",
  author: "napolean hill", 
  genre: "self help",
  printAuthor() {
    console.log(`author is ${this.author}`);
  },
  printTitle(message) {
    console.log(`${this.title} - ${message}`);
  },
  printSomething(message) {
    return `something with the message '${message}' has been printed`;
  },
};

console.log(thinkAndGrowRich.isbn);
console.log(thinkAndGrowRich.author);
console.log(thinkAndGrowRich.genre);
thinkAndGrowRich.printAuthor();
thinkAndGrowRich.printTitle("awesome");
console.log(thinkAndGrowRich.printSomething("book is awesome"));
