// const s = 'Hello';

// console.log(s.toUpperCase());

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(navigator);

const book1 = {
  title: 'Book One',
  author: 'Jhon Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written By AUthor ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());
