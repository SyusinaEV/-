       function isEven(N){
           if (N == 0) return true;
           if (N == 1) return false;
           if (N < 0) return isEven(-N);
           else return isEven(N-2);
       }
       console.log( isEven(25));