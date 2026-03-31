import Animal from "./Animal.js";

export default class Cat extends Animal {
  constructor(name) {
    super("cat", 4, name);
  }

  meow() {
    console.log("Meow!");
  }

  scratch(thing) {
    console.log(`The cat scratches the ${thing}.`);
  }

  call() {
    // cats negeren je 😆
  }
}
