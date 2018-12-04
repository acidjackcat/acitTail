function generator(input) {
    "use strict";
    var number = input;
    return function () {
       return number * 2;
    }
    
}
var calc = generator(100);
console.log(calc( ));

