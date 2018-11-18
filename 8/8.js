          function reverseArray (array){
              var a=[];
              for (var i = array.length - 1; i >= 0; i--){
                  a.push( array[i]);
              }
              return a;
          }

          function reverseArrayInPlace(array) {
             for (var i = 0; i < Math.floor(array.length / 2); i++) {
                var temp = array[i];
                array[i] = array[array.length - 1 - i];
                array[array.length - 1 - i] = temp;
                }
             return array;
            }

        var arr=[1, 2, 3, 4];
        console.log( reverseArray([1, 2, 3])); 
        console.log( reverseArrayInPlace(arr));