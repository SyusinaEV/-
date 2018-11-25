var every = (array, test) => {
    for (var i = 0; i < array.length; i++){
        var arr = test(array[i]);
        if (!arr) return false;
    }
    return true;
  }

var some = (array, test) => {
    for (var i = 0; i < array.length - 1; i++) {
        var arr = test(array[i]);
        if (arr) return true;  break;
    }
    return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));