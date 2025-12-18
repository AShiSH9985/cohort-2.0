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