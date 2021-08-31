const person = new Object({ name: 'alim', age: 32 });
console.log(person);

// class add object create
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}
const peoples = new People('manush',20)
console.log(peoples)