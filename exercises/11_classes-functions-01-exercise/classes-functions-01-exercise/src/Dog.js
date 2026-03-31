import Animal from "./Animal.js";

export default class Dog extends Animal {
  constructor(name) {
    super("dog", 4, name); // a dog has 4 legs
  }

  bark() {
    console.log("Woof!");
  }

  fetch(thing) {
    console.log(`The dog fetches the ${thing}.`);
  }
}
