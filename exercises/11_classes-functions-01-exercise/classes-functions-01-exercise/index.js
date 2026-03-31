import Animal from "./src/Animal.js";
import Cat from "./src/Cat2.js";
import Dog from "./src/Dog.js";

const human = new Animal("human", 2, "Emma");
human.identify();
human.fetch();

const dog = new Dog("Bobby");
dog.bark();
dog.fetch("ball"); // 👈 deze
console.log(dog.legs);
dog.identify();

const dog2 = new Dog("Max");

const cat = new Cat("Luna");

cat.meow();
cat.scratch("sofa");
cat.call("Luna"); // doet niks 😆

dog.call("Bobby");
dog2.call("Max");

human.call("Emma");
human.call("Lisa");
