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
 
class Sketch{
    constructor(){
        this.character="soremon";
        this.color="skyblue";
    }
 }
 Sketch.prototype.speak=function(){}
 Sketch.prototype.walk=function(){}

let sketch1= new Sketch();


console.log(this);
function abcd(){
    console.log(this)
}
abcd();

let obj = {
    name: "ahrsh",
    fnc: function(){
        console.log(this)},
}
obj.fnc();


/////           this keyword            /////
////    global -> window                /////
console.log(this)

////    function -> window                /////
function abcd(){
    console.log(this)
}
abcd()
////    es5 function indide object  -> object                /////
let obj4={
    name:"dingdon",
    fnc:function(){
        console.log(this)
    }
}
obj4.fnc();
////    es6 function inside object -> window                /////
let obj1={
    fnc:()=>{
        console.log(this)
    }
}
obj1.fnc();
////    es5 funtion inside es5 function inside object -> window                /////
let obj2={
    fnc:function(){
        function ab(){
            console.log(this)
        }
        ab();
    }
}
obj2.fnc();
////    es6 function inside es5 function inside object -> object                /////

let obj3={
    fnc:function(){
        let a=()=>{
            console.log(this);
        }
        a()
    }
}
obj3.fnc();



//////  call, apply, bind           /////

///// ek function mein this ki value window hoti hai,agar app chaahte ho ki wo value window naa ho uski jagah koi or object ho to use kar skte ho apply , call,bind ka          /////


let obje={
    name:"ANJKK",
}
function an(a,c,b){
    console.log(this,a,b,c);
}
an.call() // fnc chalata hai and this ki value  set karta h
an.apply(obje,[1,2,3]); //wahi karta hai jo call karta ha and arguments mein pehli value this or ek array deta h
let newfnc=an.bind(obj,1,2,3)  // wahi karta hai jo call karta hai and apko naya fnc deta h
newfnc();
