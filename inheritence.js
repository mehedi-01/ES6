class Parent {
    constructor(){
        this.fatherName = "Billal";
    }
}

class  Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby  =  new Child("fahim");
const baby2 = new Child("rahim");

console.log(baby.getFullName());
console.log(baby2.getFullName());