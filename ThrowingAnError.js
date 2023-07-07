try{
    console.log("Hello World");
    throw new Error("This is an error");
    console.log("This is never executed");
}catch(err){
    console.log(err.message);
}finally{
    console.log("This is always executed");
}