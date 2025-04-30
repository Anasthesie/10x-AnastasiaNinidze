// Easy tasks

// 1 task
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  getInfo: function () {
    return `${this.brand} ${this.model}, ${this.year}`;
  },
};
console.log(car.getInfo());
car.year = 2000;
console.log(car);
delete car.brand;
console.log(car);

// 2 task
const person = {
  name: "Anastasia",
  age: 21,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
console.log(person.greet());

// 3 task
const student = {
  name: "Anastasia",
  age: 21,
  grades: [1, 2, 3, 4],
};

const entriesResult = Object.entries(student);
console.log(entriesResult);
const valuesResult = Object.values(student);
console.log(valuesResult);
const keysResult = Object.keys(student);
console.log(keysResult);

// 4 task
function Book(title, author, year) {
  this.bookName = title;
  this.fullName = author;
  this.Edition = year;
}
const firstBook = new Book("Harry Potter", "J. K.", "1997 ");
console.log(firstBook);
const secondBook = new Book("War and Peace", "Leo Tolstoy", "1867");
console.log(secondBook);

// Norm tasks

// 5 task

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("Animal sound");
  }
}
const myAnimal = new Animal("Buddy", "Dog");
myAnimal.makeSound();
