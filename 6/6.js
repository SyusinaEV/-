   function countChar(string, ch){
            var t=0;
            for (var i = 0; i < string.length-1; i++){
                if (string.charAt(i)==ch) t++;
            }
            return (t);
            } 

           function countBs(string){
             return countChar(string, "в");
            }

        str="весьма воздействует на нас словесная изысканная вязь.";
        console.log (countBs(str));
        console.log (countChar(str, "с"));
