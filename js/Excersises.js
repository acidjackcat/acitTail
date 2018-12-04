var average = function() {
    var i = 0;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return (sum/arguments.length);
}
console.log(average(5,6));


var a = 10;
(function b () {
    console.log(a);
    var a = 12;
})();

(function () {console.log(a)})()