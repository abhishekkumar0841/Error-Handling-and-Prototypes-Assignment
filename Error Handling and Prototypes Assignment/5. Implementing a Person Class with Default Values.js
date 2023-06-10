class Person{
    constructor(name = "Unknown", age = 0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const knownPerson = new Person("Abhishek", 23);
console.log(knownPerson.getDetails())

const unknownPerson = new Person()
console.log(unknownPerson.getDetails())
