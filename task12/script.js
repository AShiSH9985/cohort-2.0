let btn=document.querySelector("button")
let main=document.querySelector(".main")

btn.addEventListener("click",function(){
    // btn.style.
   let divv=document.createElement("div");
   divv.classList.add("divvv");
   let top=Math.random()*100;
   let lefft=Math.random()*100;

   let names=["Hello","hii","bye","what are you doning","i am fine","can i get your number","insta id","good morning","good afternoon","good evening"]
   let index=Math.floor(Math.random()*names.length)
    let h4=document.createElement("h4")
    h4.innerHTML=names[index]

   let r=Math.floor(Math.random()*256);
   let g=Math.floor(Math.random()*256);
   let b=Math.floor(Math.random()*256);

   divv.style.backgroundColor=`rgb(${r},${g},${b})`
   divv.style.left=lefft+"%";
   divv.style.top=top+"%";
    divv.appendChild(h4)
   main.appendChild(divv);


})