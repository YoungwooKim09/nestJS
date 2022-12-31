class Person{
    constructor(name, first, second, third){
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum(){
        return this.first + this.second + this.third;
    }
}

class PersonPlus extends Person{
    constructor(name, first, second, third, fourth){
        super(name, first, second, third);
        this.fourth = fourth;
    }
    sum(){
        return super.sum() + this.fourth;
    }
    avg(){
        return (this.first + this.second + this.third + this.fourth)/4;
    }
}

var kim = new PersonPlus('kim', 10, 20, 30, 40);

console.log(kim.sum());
console.log(kim.avg());