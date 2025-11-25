let crsor=document.querySelector(".cursor")
let main=document.querySelector("#main")

main.addEventListener("mousemove",function(dets){
    
    crsor.style.left=dets.x+"px"
    crsor.style.top=dets.y+"px"
    crsor.style.transform="translate(-50%,-50%)"
    

})