
var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var bookTitle;
var bookAuthor;

bookTitle = "Great Expectations";
bookAuthor = "Charles Dickens";
console.log(bookTitle + " by " + bookAuthor);

var bookTitle;
var bookAuthor;

bookTitle = "War and Peace";
bookAuthor = "Leo tolstoy";
console.log(bookTitle + " by " + bookAuthor);


var books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Moby-Dick', author: 'Herman Melville' },
    { title: 'War and Peace', author: 'Leo Tolstoy' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'Jane Eyre', author: 'Charlotte Brontë' }
];


books.forEach(book => {
    console.log('Title:', book.title);
    console.log('Author:', book.author);
});

