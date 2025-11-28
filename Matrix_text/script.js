let p=document.querySelector("p")
const charcters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=p.innerHTML 
let iteration=0
p.addEventListener("mouseenter",function(){
    // setInterval(() => {
        function randomtext(){
            const str=text.split("").map((char,index)=>{
                if(index<iteration){
                    return char
                }
                return charcters.split("")[Math.floor(Math.random()*52)]
            }).join("")
            p.innerText=str
            iteration+=0.5
        }
        
        setInterval(randomtext,50)
    // }, 100);

})
