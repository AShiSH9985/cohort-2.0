/// ------ objects ------  /////

// let user1={
//     name:"harsh",
//     age:27,
//     email:"ashishgmail.com",
//     address:"home"
// }

/////  class -> blueprint  //////
////  Automatic chalne vala function = Constructor /////

// class Remote{
//     constructor(product,price,color){ 
//         this.product=product;
//         this.price=price;
//         this.color=color;
//     }
//     powerOn(){
//         console.log("machine is on now");
//     }
//     powerOff(){
//         console.log("machine is 0ff now");
//     }
// }
// let remote1=new Remote("lenovo",2500,"red");
// let remote2=new Remote("lenovo",2500,"white");

class BiscuitMaker{
    constructor(name, price, type){
        this.name=name;
        this.price=price;
        this.type=type;
    }
} 

let biscuit1 =new BiscuitMaker("ParleG",250,"cream");
let biscuit2 =new BiscuitMaker("Tiger",120,"normal");
let biscuit3 =new BiscuitMaker("Burbon",150,"Cream");

//////      Prototype       /////

 BiscuitMaker.prototype.hulu="Ahaaa0";

 BiscuitMaker.prototype.type=function(){
    console.log("typeee");
 }