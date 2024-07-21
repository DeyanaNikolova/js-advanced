class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }
    addBook(bookName, bookAuthor) {

        let book = {
            bookName,
            bookAuthor,
            payed: false
        }
        if (this.capacity > this.books.length) {
            this.books.push(book);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        } else {
            throw new Error('Not enough space in the collection.');
        }
    }

    payBook(bookName) {
        let isInBooksArr = false;
        let isPaid = false;
      
        for (let book of this.books) {

            if (book.bookName == bookName && book.payed == false) {
                book.payed = true;
                isPaid = true;
                isInBooksArr = true;
                return `${bookName} has been successfully paid.`;
            }
        }
        if (isPaid) {
            throw new Error(`${bookName} has already been paid.`);
        }  if (!isInBooksArr){
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {
       // let isPaid = false;
        let isInBooksArr = false;

        for(let element of this.books){

            if(element.bookName && element.payed == true){
                isInBooksArr = true;
                let index = this.books.findIndex(element);
                this.books.splice(index, 1);
                return `${bookName} remove from the collection`;
            }
            if (element.payed == false) {
                 isInBooksArr = true;
                throw new Error(`${bookName} need to be paid before removing from the collection.`);
            }  
            
            if (!isInBooksArr) {
                throw new Error('The book, you\'re looking for, is not found.');
            } 
        }
    }
}
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));


