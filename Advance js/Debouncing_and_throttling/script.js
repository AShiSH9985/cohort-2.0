///  debouncing and throttling
///  code usiing ai for these topics

function debounce(fn,delay){
     let timer;
     return function(){
        clearTimeout(timer);
        timer=setTimeout(fn,delay)
     }
}

document.querySelector("#search").addEventListener("input",
    debounce(function(){
        console.log("chala")
    },1000)    
)


///  throttle
function throttle(fn,delay){
    let last=0;
    return function(){
        const now=Date.now()
        if(now-last>=delay){
            last=now;
            fn();
        }
    }
}
window.addEventListener("mousemove",throttle(function(){
    console.log("first")
},2000))



//  json parse -> json se object banate ho
//  json stringify -> json bante ho
