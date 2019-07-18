

// var theBiggest = function (a , b) {
//     var result;
//     a > b ? result = ['a: ', a] : result = ['b: ' + b];
//     // console.log(result);
//     return result;
// }

// var a = 5;
// var b = 6;

// console.log(theBiggest(a, b));



var first = 5;
var last = 6;


var fun = (function (a, b) {
    var result;
    a > b ? result = ['a: ', a] : result = ['b: ' + b];
    // console.log(result);
    return result;
})(first,last)



console.log(fun);