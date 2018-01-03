var person = {
  firstName : 'kakaru',
  lastName : 'kakaru',
}

for (var prop in person) {
  console.log(prop + ": " + person[prop]);
}

var arr = ['1', '2'];

for (var index in arr) {
  console.log(index + ": " + arr[index]);
}