//complete this code
class Animal{
  constructor(species) {
    this._species = species;
  }
  get species(){
    return `The animal is a ${this._species}`;
  }
  makeSound(){
    console.log(`${this._species}'s sound`);
  }
}

class Cat extends Animal{
  purr(){
    console.log('Purr');
  }
}

class Dog extends Animal{
  bark(){
    console.log("woof");
  }
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
