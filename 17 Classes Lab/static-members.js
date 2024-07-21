class Cat{

    static legNumber = 4; // static property
    isHungry = true; // syntax to sets default value

    constructor(name){
       
        this.name = name;
      //  this.isHubgry = true;   2 way to sets default value
    }
    makeSound(){
        console.log(`${this.name}: Meow!`);
    }
    static vetCheck(cat){
        if(cat.isHungry){
            console.log(`This cat should be fed!`);
        }else{
            console.log('This cat is fine');
        }
    }
}

let cat = new Cat('Navcho');

cat.makeSound();

Cat.vetCheck(cat); // call static method through the class Cat

console.log(Cat.legNumber);