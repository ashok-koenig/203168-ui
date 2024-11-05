class Person{
    constructor(protected firstName: string,protected lastName: string,protected age: number){

    }
    protected introduce(){
        console.log(`I'm ${this.firstName} ${this.lastName} and ${this.age} years old`);        
    }
}

class Student extends Person{
    constructor(firstName: string, lastName: string, age:number, private grade: number){
        super(firstName, lastName, age)
    }
    public introduce(): void {
        super.introduce()
        console.log(`Studying ${this.grade} grade`);        
    }
}

var john = new Student('John', 'Peter', 13,7)
john.introduce()