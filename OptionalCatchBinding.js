// install @babel/plugin-transform-optional-catch-binding


try{
    console.log("Hello World");
    throw new Error("This is an error");
    console.log("This is never executed");
}catch{
    console.log('This is my Custom Error Message');
}finally{
    console.log("This is always executed");
}