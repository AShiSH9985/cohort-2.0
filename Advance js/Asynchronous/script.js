/////       Introduction to Asynchornoy in Javascript       /////

/////  callback ->  ek funtion to turant nhi chalega ye jab chalega jab aapka koi kaam complete hoga

// function abcd(fn){
//     fn(function(fn2){
//         fn2();
//     })
// }

// abcd(function(fn1){
//     fn1(function(){})
// })

function amitSeDetailsLaao(address,cb){
    console.log("details fetching ....")
    setTimeout(()=>{
        cb({lat:23.36,lng:76.5})
    },3000)
}

amitSeDetailsLaao("indrapuri 231-H Block",function(details){
    console.log(details)
})


//////////////////////////////////////////////////////////////////////


function instagramParJaaoDataLaao(username,cb){
    //logic
    //cb
    setTimeout(()=>{
        cb({id:1,username:"harsh",age:27})

    },5000)
}
instagramParJaaoDataLaao("harsh",function(data){
    console.log(data)
});



//////  Exercise 1 //////
// Ek function banao afterdalya
//Requirements:
// ye function  cheezien lega:
// time (miliseconds)
//callback functionn
// given time ke baad callback call kare
// callback ke andar "callback executed" print hona chahiye
// use case socho:
// "2 second baad ek kaam karna h"
// goal:
// smajhna ki call back delya ke baad kaise execute hota hai
// ye settimeout + callback connection hai

function afterdelay(time,cb){
    setTimeout(function(){
        cb();
    },time)
}
afterdelay(3000,function(){
    console.log("callback executed")

})

//// exercise 2 //// goal samajhna ki ek async ka result next async ko kaise milta h

function getUser(username,cb){
    console.log("getting user details")
    setTimeout(()=>{
        cb({id:1,username:"harsh"})
    },1000)
}
function getUserPosts(id,cb){
    console.log("getting user posts.....")
    setTimeout(()=>{
        cb(["hello","good day","fuck you"])
    },2000)
}
getUser("harsh",function(data){
    getUserPosts(data.id,function(allposts){
        console.log(data.username,allposts)
    })
})

//// exercise 3  (callback, dependency, thoda painful) ///////
 


function loginUser(name,cb){
    console.log("logged in")
    setTimeout(()=>{
        cb({id:10,name:"anjb"})
    },1000)
}
function fetchPermisson(id,cb){
    console.log("fetch data")
    setTimeout(()=>{
        cb(["read","write"])
    },1200)
}
function loadDashboard(permissions,cb){
    setTimeout(()=>{
        cb()
    },1500)
}

loginUser("harsh",function(userdata){ 
    fetchPermisson(userdata.id,function(permissions){
        loadDashboard(permissions,function(){
            console.log("permisson loaded")
        })
    })
})
