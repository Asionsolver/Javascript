var foo = 4;

function myFunc(){
    console.log(foo);

    var foo = 9;
}
myFunc(); // undefined. Because when the function is invoked a execution context is created memory is allocate to foo is undefined when it start run it prints undefined. 