class Animal {
    speak() {}
  }
  
  class Dog extends Animal {
    speak() {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    speak() {
      return "Meow!";
    }
  }

  class Lion extends Animal {
    speak() {
      return "Only Roars!";
    }
  }
  
  class AnimalFactory {
    createAnimal(animalType) {
      if (animalType === "dog") {
        return new Dog();
      } else if (animalType === "cat") {
        return new Cat();
      } else if (animalType == "lion"){
        return new Lion()
      }
       else {
        return null;
      }
    }
  }
  

  const factory = new AnimalFactory();
  const dog = factory.createAnimal("dog");
  const cat = factory.createAnimal("cat");
  const lion = factory.createAnimal("lion");
  
  console.log(dog.speak()); 
  console.log(cat.speak()); 
  console.log(lion.speak()); 

  