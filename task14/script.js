let main=document.querySelector("#main")
let btn1=document.querySelectorAll(".keys")

let aud1=new Audio("./tones/0.mp3");
let aud2=new Audio("./tones/1.mp3");
let aud3=new Audio("./tones/2.mp3");
let aud4=new Audio("./tones/3.mp3");
let aud5=new Audio("./tones/4.mp3");
let aud6=new Audio("./tones/5.mp3");
let aud7=new Audio("./tones/6.mp3");
let aud8=new Audio("./tones/7.mp3");
let aud9=new Audio("./tones/8.mp3");
let aud10=new Audio("./tones/9.mp3");
let aud11=new Audio("./tones/10.mp3");
let aud12=new Audio("./tones/11.mp3");
let aud13=new Audio("./tones/12.mp3");
let aud14=new Audio("./tones/13.mp3");
let aud15=new Audio("./tones/14.mp3");
let aud16=new Audio("./tones/15.mp3");
console.log(btn1)

document.body.addEventListener("keydown",function(data){
    if(data.key === btn1[0].innerHTML){
        btn1[0].style.transform=`scale(0.95)`
        aud1.play();
    }
    if(data.key === btn1[1].innerHTML){
        btn1[1].style.transform=`scale(0.95)`
        aud2.play();
    }
    if(data.key === btn1[2].innerHTML){
        btn1[2].style.transform=`scale(0.95)`
        aud3.play();
    }
    if(data.key === btn1[3].innerHTML){
        btn1[3].style.transform=`scale(0.95)`
        aud4.play();
    }
    if(data.key === btn1[4].innerHTML){
        btn1[4].style.transform=`scale(0.95)`
        aud5.play();
    }
    if(data.key === btn1[5].innerHTML){
        btn1[5].style.transform=`scale(0.95)`
        aud6.play();
    }
    if(data.key === btn1[6].innerHTML){
        btn1[6].style.transform=`scale(0.95)`
        aud7.play()
    }
    if(data.key === btn1[7].innerHTML){
        btn1[7].style.transform=`scale(0.95)`
        aud8.play();
    }
    if(data.key === btn1[8].innerHTML){
        btn1[8].style.transform=`scale(0.95)`
        aud9.play();
    }
    if(data.key === btn1[9].innerHTML){
        btn1[9].style.transform=`scale(0.95)`
        aud10.play();
    }
    if(data.key === btn1[10].innerHTML){
        btn1[10].style.transform=`scale(0.95)`
        aud11.play();
    }
    if(data.key === btn1[11].innerHTML){
        btn1[11].style.transform=`scale(0.95)`
        aud12.play();
    }
    if(data.key === btn1[12].innerHTML){
        btn1[12].style.transform=`scale(0.95)`
        aud13.play();
    }
    if(data.key === btn1[13].innerHTML){
        btn1[13].style.transform=`scale(0.95)`
        aud14.play();
    }
    if(data.key === btn1[14].innerHTML){
        btn1[14].style.transform=`scale(0.95)`
        aud15.play();
    }
    if(data.key === btn1[15].innerHTML){
        btn1[15].style.transform=`scale(0.95)`
        aud16.play();
    }
}) 
document.body.addEventListener("keyup",function(data){
   if(data.key === btn1[0].innerHTML){
        btn1[0].style.transform=`scale(1)`
    }
    if(data.key === btn1[1].innerHTML){
        btn1[1].style.transform=`scale(1)`
    }
    if(data.key === btn1[2].innerHTML){
        btn1[2].style.transform=`scale(1)`
    }
    if(data.key === btn1[3].innerHTML){
        btn1[3].style.transform=`scale(1)`
    }
    if(data.key === btn1[4].innerHTML){
        btn1[4].style.transform=`scale(1)`
    }
    if(data.key === btn1[5].innerHTML){
        btn1[5].style.transform=`scale(1)`
    }
    if(data.key === btn1[6].innerHTML){
        btn1[6].style.transform=`scale(1)`
    }
    if(data.key === btn1[7].innerHTML){
        btn1[7].style.transform=`scale(1)`
    }
    if(data.key === btn1[8].innerHTML){
        btn1[8].style.transform=`scale(1)`
    }
    if(data.key === btn1[9].innerHTML){
        btn1[9].style.transform=`scale(1)`
    }
    if(data.key === btn1[10].innerHTML){
        btn1[10].style.transform=`scale(1)`
    }
    if(data.key === btn1[11].innerHTML){
        btn1[11].style.transform=`scale(1)`
    }
    if(data.key === btn1[12].innerHTML){
        btn1[12].style.transform=`scale(1)`
    }
    if(data.key === btn1[13].innerHTML){
        btn1[13].style.transform=`scale(1)`
    }
    if(data.key === btn1[14].innerHTML){
        btn1[14].style.transform=`scale(1)`
    }
    if(data.key === btn1[15].innerHTML){
        btn1[15].style.transform=`scale(1)`
    }
}) 



