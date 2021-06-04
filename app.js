console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
      this.name = name;
      this.pets = pets;
      this.residence = residence;
      this.hobbies = hobbies;
    }

    info() {
        console.log(
          `My name is ${this.name}. I have ${this.pets} pets. I live in ${this.residence}. Some of my hobbies are ${this.hobbies}.`
        );
    }
    greeting(friend) {
      console.log(`Hello ${friend}!`);
    }
}

class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer";
    }
    greeting(friend) {
      console.log(`Hello ${friend}! My name is ${this.name} and I am a ${this.occupation}.`);
    }
}

const Barb = new Person("Barb", 2, "Tucson, AZ", ["listening to music", "going for long walks in the morning", "watching cats on YouTube", "making quilts", "reading"]);
const Jay = new Coder("Jay", 2, "Tucson, AZ", ["reading motivational or self-help books", "learning to code"]);


Barb.greeting("John");
Barb.info();
Jay.greeting("Jerry");
Jay.info();
