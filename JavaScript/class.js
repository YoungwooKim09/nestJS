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

var kim = new Person('kim', 10, 20, 30);
kim.sum = function(){
    return this.first + this.second + this.third;
}

var lee = new Person('lee', 20, 20, 30);

console.log(kim.sum());
console.log(lee.sum());