// const s = 'Hello';

// console.log(s.toUpperCase());

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(navigator);

// const book1 = {
//   title: 'Book One',
//   author: 'Jhon Doe',
//   year: '2013',
//   getSummary: function() {
//     return `${this.title} was written By Author ${this.author} in ${this.year}`;
//   }
// };

// const book2 = {
//   title: 'Book Two',
//   author: 'Jane Doe',
//   year: '2018',
//   getSummary: function() {
//     return `${this.title} was written By Author ${this.author} in ${this.year}`;
//   }
// };
// console.log(book2.getSummary());
// console.log(Object.keys(book2));
// console.log(Object.values(book2));

//--------------------------------------Constructor--------------//

// function Book(title, author, year) {
//   //   console.log('Book Initilized');
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function() {
//     return `${this.title} was written By Author ${this.author} in ${this.year}`;
//   };
// }

// //Instatitate Object
// const book1 = new Book('Book One', 'Ashutosh Panda', '2019');
// const book2 = new Book('Book Two', 'Deepika Panda', '2017');

// console.log(book2.getSummary());

// ------------------ ProtoType ----------//

// function Book(title, author, year) {
//   //   console.log('Book Initilized');
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//   return `${this.title} was written By Author ${this.author} in ${this.year}`;
// };

// //getAge
// Book.prototype.getAge = function() {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// //Revise / Changed Year
// Book.prototype.revise = function(newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// //Instatitate Object
// const book1 = new Book('Book One', 'Ashutosh Panda', '2012');
// const book2 = new Book('Book Two', 'Deepika Panda', '2017');

// console.log(book1);
// book1.revise('2018');
// console.log(book1);

// ========Inheritance=======//

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function() {
//   return `${this.title} was written By Author ${this.author} in ${this.year}`;
// };

// //Magazine Constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

//inherit prototype
// Magazine.prototype = Object.create(Book.prototype);///////////////////////

// //Instantiate Magazine Object
// const mag1 = new Magazine('Magaine One', 'John Doe', '2014', 'June');

// ///Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);

// Object of Protos

// const bookProtos = {
//   getSummary: function() {
//     return `${this.title} was written By Author ${this.author} in ${this.year}`;
//   },
//   getAge: function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }
// };

// //Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Shruti Pramalik';
// book1.year = '2016';

// console.log(book1);

// Classes //

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written By Author ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  static topBookStore() {
    return 'Baners  & Nobel';
  }
}

// //Instantiate a Object
// const book1 = new Book('Book One', 'Rajendra Kumar Panda', '1999');

// console.log(book1);
// book1.revise('2015');
// console.log(book1);

// console.log(Book.topBookStore());

//  Sub Class

//Magazine SubClass

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
//Instanitate Month
const mag1 = new Magazine('Magazine One', 'Dua Lipa', '2017', 'Aug');
console.log(mag1.getSummary());
