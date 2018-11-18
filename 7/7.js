 function range (start, end, step ){
              var a=[];
              if (step > 0){
                  for (var i = start; i <= end; i += step) 
                     a.push(i);
                } else {
                    for (var i = start; i >= end; i += step) 
                    a.push(i);
                    }
                     return a;
                }

            function sum (array){
                var s=0;
                for (var i = 0; i < array.length; i++){
                    s += array[i];
                }
                return s;
            }

        var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log( range(1, 10, 2));
        console.log( sum( range(1, 10, 2)));
        console.log( range(5, 2, -1));
