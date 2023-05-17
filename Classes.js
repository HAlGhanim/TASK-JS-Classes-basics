/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  printName = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  };

  calculateAge = (currentYear) => {
    return currentYear - this.birthYear;
  };
}
const person1 = new Person("Humoud", "AlGhanim", "Male", 1998);
const person2 = new Person("Sulaiman", "AlGhanim", "Male", 1997);
const person3 = new Person("Hessa", "AlGhanim", "Female", 2003);

const persons = [person1, person2, person3];

persons.forEach((person) => {
  person.printName();
});

const sum = persons.reduce(
  (total, current) => total + current.calculateAge(2023),
  0
);

console.log(sum);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  rating = [];

  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }

  rate = (score) => {
    if (score >= 0 && score <= 10) {
      this.rating.push(score);
    }
  };
  averageRating = () => {
    const sumOfValues = this.rating.reduce(
      (total, ratingValue) => total + ratingValue,
      0
    );
    return sumOfValues / this.rating.length;
  };
}

const movie1 = new Movie("The Godfather", 175, "Action / Drama");
const movie2 = new Movie("The Godfather II", 202, "Action / Drama");
const movie3 = new Movie("The Godfather III", 162, "Action / Drama");
const movie4 = new Movie("The Shawshank Redemption", 142, "Drama");

movie1.rate(9);
movie1.rate(9);
movie1.rate(10);
movie1.rate(10);

console.log(movie1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

class Actor extends Person {
  movies = [];

  constructor(firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear);
  }
  addMovie = (movie) => {
    this.movies.push(movie);
  };
}
const actor1 = new Actor("Marlon", "Brando", "Male", 1924);
actor1.addMovie(movie1);

console.log(actor1);
