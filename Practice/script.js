//SECTION 1: OOPS Thinking with Objects
//	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
//  2.	Add one more method to the same object that increases the price by 10 percent.
//  3.	Now imagine you need 10 laptops with same structure but different data.
//  Write down (in words or code) what problems you will face if you keep using plain objects.

let Laptop={
    brand:"Dell",
    price:50000,
    start:function(){
        console.log("laptop started")
    },
    increaseprice:function(){
        console.log(this.price*1.1);
    }
}


///  when we using objects we should make more objects like when we need 10 laptops with same struccture we need to make 10 objects.


/*SECTION 2: Classes and Objects (Reinforcement)
	4.	Create a class named Employee that stores:
name
salary

Add a method showDetails that prints name and salary.
	5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
	6.	Explain in your own words:
Why is class considered a better option than writing similar objects again and again? */

class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }
    showdetails(){
        console.log("Name is "+ this.name+ " Salary "+this.salary);
    }
}

const employee1=new Employee("Ashish",5693230);
const employee2=new Employee("As",5230);
const employee3=new Employee("Ashok",56930);
employee1.showdetails()
employee2.showdetails()
employee3.showdetails()

/// because yout dont need to make objects more than one there a constructor that update values of every employee or we can say object.



/*SECTION 3: Constructor and Initialization
	7.	Create a class named BankAccount.
Its constructor should accept accountHolderName and balance.
	8.	Inside the constructor, store both values using this.
	9.	Add a method deposit(amount) that increases the balance.
	10.	Create two bank accounts and deposit money into only one.
Observe and explain why the second account is not affected. */

class BankAccount{
    constructor(accountHolderName,balance){
        this.name=accountHolderName,
        this.balance=balance
    }
    deposit(amount){
        return this.balance=this.balance+amount;
    }
}

let acc1=new BankAccount("Harish",15236000)
let acc2=new BankAccount("Aman",500)


/*SECTION 4: Understanding this (Very Important)
	11.	Create an object named profile with a property username and a method printName that logs this.username.
	12.	Call the method normally and observe the output.
	13.	Store the method in a separate variable and call it.
Observe what happens to this and explain why.
	14.	Modify the code so that this works correctly again.
*/
let Profile={
    username:"ANsh",
    printName:function(){
        console.log(this.username)
    }
}

let a=function(){
    console.log(this.username)
}


/*
    SECTION 5: Constructor Function and Prototype
	15.	Create a constructor function called Vehicle that accepts type and wheels.
	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
	17.	Move the same method to Vehicle.prototype and repeat the test.
	18.	Explain why the prototype approach is preferred.
*/

function Vehicle(type,wheels){
    this.type=type
    this.wheels=wheels

    this.describe=function(){
        console.log("this vehicle is a "+this.type+" with "+this.wheels+" wheels")
    }
}

function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}
const v1 = new Vehicle("Car", 4);
const v2 = new Vehicle("Bike", 2);

v1.describe();
v2.describe();


function Vehicle(type,wheels){
    this.type=type
    this.wheels=wheels

    Vehicle.prototype.describe = function () {
  console.log(
    "This vehicle is a " + this.type + " with " + this.wheels + " wheels"
  );
};
}


const v3 = new Vehicle("Car", 4);
const v4 = new Vehicle("Bike", 2);

v3.describe();
v4.describe();

/*
    SECTION 6: call Method Practice
	19.	Create a function showBrand that prints this.brand.
	20.	Create two different objects with brand values.
	21.	Use call to execute showBrand for both objects.
	22.	Explain what problem call is solving here.
*/

function showBrand(){
    console.log(this.brand)    
}
let obj1={
    brand:"Dell"
}
let obj2={
    brand:"Apple"
}
showBrand.call(obj1)
showBrand.call(obj2)


/*
    SECTION 7: apply Method Practice
	23.	Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name.
	24.	Create an object with a name property.
	25.	Use apply to call introduce using the object and an array of arguments.
	26.	Explain in simple words how apply differs from call.
*/

function introduce(city,role){
    console.log(this.name+" "+city+ " "+role)
}
let objee={
    name:"Ashish"
}

introduce.apply(objee,["shergarh","web developer"])

/*
    SECTION 8: bind Method Practice
	27.	Create a function greet that prints “Hello” followed by this.name.
	28.	Bind this function to an object and store the returned function in a variable.
	29.	Call the bound function later and observe the output.
	30.	Explain why bind is useful when functions are executed later or inside callbacks.
*/

function greet(){
    console.log("Hello "+this.name)
}
let obja={
    name:"Ashish"
}

const boundgreet=greet.bind(obja)
boundgreet()