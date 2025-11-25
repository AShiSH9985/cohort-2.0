let h3=document.querySelector("h3");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(btn.innerHTML === "Follow"){
        h3.innerHTML="You follow her"
        h3.style.color="green"
        btn.innerHTML="Unfollow"
        btn.style.color="blue"
        btn.style.transform=`scale(0.9)`
    }else{
        h3.innerHTML=""
        btn.innerHTML="Follow"
        btn.style.color="green"
        btn.style.tranform=`scale(1)`
    }
})