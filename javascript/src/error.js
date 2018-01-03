function devide(x, y){
  if (y == 0){
    var err = new Error("Can't devide by zero");
    throw err;
  }

  return x/y;
}

try {
  var a = devide(10, 3);
  var b = devide(10, 0);
  console.log(a);
  console.log(b);
} catch(e) {
  console.log(e);  
}

console.log("not stopped");
