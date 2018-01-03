var arr = [1, 2, 3];
arr.name = 'arr';

for (var val of arr) {
  console.log(val);
}

for (var [index, val] of arr.entries()) {
  console.log(index, val);
}

var iterator = arr.entries();
console.log(iterator);