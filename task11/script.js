let btn=document.querySelector("button")
let main=document.querySelector(".main")

btn.addEventListener("click",function(){
   let divv=document.createElement("div");
   divv.classList.add("divvv");
   let top=Math.random()*100;
   let lefft=Math.random()*100;

   let r=Math.floor(Math.random()*256);
   let g=Math.floor(Math.random()*256);
   let b=Math.floor(Math.random()*256);

   divv.style.backgroundColor=`rgb(${r},${g},${b})`
   divv.style.left=lefft+"%";
   divv.style.top=top+"%";
   main.appendChild(divv);


})