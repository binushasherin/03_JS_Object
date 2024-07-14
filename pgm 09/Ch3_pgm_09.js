var book1;
var book2;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien",
    published: 1937
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman",
    published: 1995
};

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);


book3 = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    published: 1997
};
console.log(book3.title + " by " + book3.author);

console.log(book1.published);
console.log(book2.published);
console.log(book3.published);