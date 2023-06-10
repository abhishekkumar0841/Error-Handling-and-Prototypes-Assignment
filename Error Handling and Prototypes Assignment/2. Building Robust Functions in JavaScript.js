function getPerson(person){
    try{
        if(typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)){
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    }catch (error) {
        return error.message;
    }
}
const person = {name: "Abhishek", age: 23}
console.log(getPerson(person));
const invalidPerson = {name: "Ravi"}
console.log(getPerson(invalidPerson));
