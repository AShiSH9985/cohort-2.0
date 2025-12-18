//// class expression, hoisting, inheritance, getter & setter ////

let Animal=class{
    constructor(){
        this.name="DOdo";
        this.breed="Dog";
    }
}
let an1=new Animal();

// no hoisting in this above code 



/////    Inheritance      /////
class Animal1{
    constructor(){
        this.hands=2;
        this.leg=2;
        this.breed="dog";
    }
    eat(){}
    breathe(){}

}

class Kekda extends Animal1{
    constructor(){
        super();
        this.legs=8;
        this.hands=0;
    }
    susu(){}

}

let k1=new Kekda();

///////////     Getter & Setter    ////////

class Animal2{
    constructor(){
        this._age=25;
    }
    set age(val){
        if(val<0){
            console.error("not");
            return;
        }
        this._age=val;
        return this._age;
        
    }
    get age(){
        return this._age;
    }
}

let aa1=new Animal2();
aa1.age=37;
// console.log(aa1.age)


// Create a user object that stores name and email and has a login method which prints "user logged in"

// let user={
//     name:"harsh",
//     eamil:"duouaodvoad",
//     login:function(){
//         console.log("User logged in")}
// }
// user.login();

class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
        
    }
        loggedin(){
            console.log("logged in")
        }
}

let user1=new User("AsDf","asdfgd.gmail");
let user2=new User("yfguihf","asdfgd.gmail");
let user3=new User("ijbgtr","asdfgd.gmail");



// create a product object that stores name and price and has a method whichc returns the final price after discount.

let product={
    name:"ashish",
    price:2500,
    disountprice:function(){
        console.log(2500-300);
    }
}
 
//the goal of this section ^^ is to understand why keeping data and behaviour together makes code easier to manage

///////////    section 2     //////////////

///   create a car class wtih the following:
///   brand
///   speed
///   a drive method tha prints the car brand and speed


class Car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }
    print(){
        return this.brand + " - "+ this.speed;
    }
}
let c1=new Car("tata","120")
let c2=new Car("Mahindra",250)


///////     Section 3 : Constructor and this keyword              ////////////

////// create a Student class whose constructor accepts name and roll number.
////// Add a method introduce tha prints both values

class Student{
    constructor(name, roll_number){
        this.name=name;
        this.roll_number=roll_number;
    }
    print(){
        return this.name+ "  "+this.roll_number 
    }
}

let s1=new Student("BObby",10)
let s2=new Student("Soigoug",952)



/////    create an object with two methods:
/////    One method using a normal function
/////    One method using an arrow function
let obbb={
    fun1:function(){
        console.log(this)
    },
    fun2:()=>{
        console.log(this)
    }
}
obbb.fun1();
obbb.fun2();



/////       Section = 4        /////////



//////   create a user constructor function (do not use class syntax)

function Use85(){
    this.name="Babes"
}

Use85.prototype.loggedin=function(){
    console.log("logged in")
}

let anq1=new Use85();
let anq2=new Use85();

