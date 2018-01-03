function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1, 10, 100, 1000));
console.log(sum(2, 20, 200, 2000));