var o = {
  name: 'Lee',
  gender: 'male',
  age: 20
};

var strObejct = JSON.stringify(o);
console.log(strObejct);

var strPrettyObject = JSON.stringify(o, null, 2);
console.log(strPrettyObject);