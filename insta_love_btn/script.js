let img=document.querySelector("img")
let icon=document.querySelector("i")

img.addEventListener("dblclick",function(){
   icon.style.opacity=0.8
   setTimeout(() => {
    icon.style.opacity=0
   }, 1000);
   setTimeout(() => {
    icon.style.transform="translate(-50%,-50%) scale(0)"
   }, 1200)
})