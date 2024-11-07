### Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

By using type guards, you can narrow down the type of a variable or expression to a more specific type, which can help you catch errors before they occur. There are several types of type guards in TypeScript, including type predicates, typeof guards, and instanceof guards.

```
interface Lion {
  roar(): void;
  breed: string;
}

interface Tiger {
  growl(): void;
  color: string;
}

function isLion(animal: Lion | Tiger): animal is Lion {
  return (animal as Lion).roar !== undefined;
}

function makeSound(animal: Lion | Tiger) {
  if (isLion(animal)) {
    animal.roar();
  } else {
    animal.growl();
  }
}

const myLion: Lion = {
  roar: () => console.log("Roar!"),
  breed: "African Lion",
};
const myTiger: Tiger = {
  growl: () => console.log("Growl!"),
  color: "Orange with Black Stripes",
};

makeSound(myLion);
makeSound(myTiger);

```
