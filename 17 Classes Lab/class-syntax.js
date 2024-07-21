class Cat{
    isHungry = true; // syntax to sets default value
    constructor(name){
        this.name = name;
      //  this.isHubgry = true;   2 way to sets default value
    }
    makeSound(){
        console.log(`${this.name}: Meow!`);
    }
}
let firstCat = new Cat('Navcho');
let secondCat = new Cat('Garry');
firstCat.makeSound();
secondCat.makeSound();

console.log(firstCat);
console.log(secondCat);

secondCat.name = 'Mishy';
console.log(secondCat.name);

// Second example

let catNames = [
    'Navcho',
    'Garry',
    'Mishy',
    'Zuza',
    'Sisa'
];
let cats = catNames.map(x => new Cat(x));
console.log(cats);

cats.forEach(x => x.makeSound());

// instanceof
console.log(firstCat instanceof Cat);
console.log(firstCat instanceof String);
