/// promise  ///


const prm = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve()
    },3000)
})
prm.then(function(){
    console.log("ehehehehe")
}).catch(function(){
    console.log("oh nooooooo")
})



/////////////////////////////////////////////////////////////////////////////////////////

//////         API call    //////////////////////////////
////   fetch se kisi bhi url par jaa sakte h , fetch ka data readable nahi hota, usey json banaake readable karte h, iske baad jo data milta hai wo readable

fetch(`https://randomuser.me/api`)
.then((notReadableData)=>{
    return notReadableData.json()
}).then((aslidata)=>{
    console.log(aslidata.results[0].name.first)
}) 



fetch(`https://randomuser.me/api`).then((raw)=> raw.json())
.then((data)=>{
    console.log(data.results[0])
}).catch(function(eror){
    console.log(eror)
})



//////   async await      //////

function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if(num<5){
                resolve(true);
            }else reject();
        },3000)
    })
}

async function abcd(){
    let v = await getNum()
    console.log(v)
}

abcd();