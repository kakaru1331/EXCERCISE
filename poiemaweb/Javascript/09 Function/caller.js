function sum() {
  if (!arguments.length) return 0;

  console.log(arguments);
  var array = Array.prototype.slice.call(arguments);
  console.log(array);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

console.log(sum(1, 5, 10));