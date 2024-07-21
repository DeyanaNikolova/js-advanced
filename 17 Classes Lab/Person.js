class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const myPerson = new Person('John', 'Smith', 27, 'johnsmith@gmail.com');
console.log(myPerson.toString());
//console.log(`${myPerson}`);