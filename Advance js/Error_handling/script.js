//   Introduction to Error Handling

//   Syntax Error -> aapne code mein likhte waqt galti kardi
// leat a=14;


//   runtime error -> code likhte waqt error nahi hai chalte waqt error hai

// logical errors -> apka code kuch or kaam kar rha h

//    try-catch
// try{
//     console.log(a.name.age)
// }
// catch(err){
//     console.error(err.name)
// }

// console.log("first")


//   try-catch-finally


// try{
//     console.log(a.name)
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("hukol")
// }

///      Throw Errors

// try {
//     let a=12
//     console.log(a.name.age)
// }catch (err){
//     throw new Error("SOmething went wrong from our side, please wait for some time")
// }



//  Scenario 1 : Weather dashboard with error handling

//  build a small weather dashboard that fetches current weather data from any public weather api (such as openwethermap).
//  you must make the api request asynchronously using fetch with async/await.

//  if the api request fails (for example, due to an invalid city name), you must handle the error using try/catch.

// Additionally, create and throw custom errors based on weather conditions.
// for example:
// if the temprature is extremely high or extremely low, throw a custom error and handle it properly in your code.

// async function getWeather(city){
//     try{
//         let apikey=`b92e57938eaebc6ded1fcf3a2f5b4bc3`

//     let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//     )
    
//     if(!data.ok){
//         throw new Error("city name not found")
//     }
//     let realdata=data.json();
//     if(realdata.main.temp<0){
//         console.warn(`to cold out there..... ${realdata.main.temp}C`)
//     }
//     else if(realdata.main.temp > 40){
//         console.warn(`to hot out there..... ${realdata.main.temp}C`)
//     }
//     else{
//         console.log(realdata)
//     }
    
    
//     }catch(err){
//         console.log(err.message)
//     }
// }
// getWeather("Mathura")


////  ek array hoga emails
const users= [
    "akarsh@gmail.com",
    "stawik@gmail.com",
    "hanna@gmail.com"
]

function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*10)
        setTimeout(()=>{
        let probability=Math.floor(Math.random()*5);
        if(probability<=5){
            resolve("Email successfully sent.");
        }else{
            reject("Email not sent");
        }
            
        },time*1000)
    })
}

async function sendEmails(userlist){
    let allresponses = userlist.map(function(email){
       return sendEmail(email).then(function(data){
            return data
        }).catch(function(err){
           return err
        })
    })
    let ans= await Promise.all(allresponses)
    ans.forEach(function(status,index){
        console.log(`${status} of index ${index}`)
    })
}
sendEmails(users)