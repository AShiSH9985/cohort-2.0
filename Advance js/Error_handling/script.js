//   Introduction to Error Handling

//   Syntax Error -> aapne code mein likhte waqt galti kardi
// leat a=14;


//   runtime error -> code likhte waqt error nahi hai chalte waqt error hai

// logical errors -> apka code kuch or kaam kar rha h

//    try-catch
try{
    console.log(a.name.age)
}
catch(err){
    console.error(err.name)
}

console.log("first")


//   try-catch-finally


try{
    console.log(a.name)
}catch(err){
    console.log(err)
}finally{
    console.log("hukol")
}

///      Throw Errors

try {
    let a=12
    console.log(a.name.age)
}catch (err){
    throw new Error("SOmething went wrong from our side, please wait for some time")
}