function deepEqual(a, b) {
  if (a === b) return true;
  
  if ((a == null) ||(typeof a != "object") || (b == null) || (typeof b != "object")) return false;

  var keys_a = Object.keys(a);
  var keys_b = Object.keys(b);

  if (keys_a != keys_b) return false;

}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
