function foo(x = 5,y) {
  return [x,y];
}

const result = foo(1);
console.log(result); // [1, undefined]