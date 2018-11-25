var arrayToList = (arr) => {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

var listToArray = (list) => {
  var arr = [];
  for (var node = list; node != null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

var prepend = (value, list) => {
  return {value, rest: list};
}

var nth = (list, ind) => {
  if (!list) return undefined;
  else if (ind == 0) return list.value;
  else return nth(list.rest, ind - 1);
}

console.log( arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));