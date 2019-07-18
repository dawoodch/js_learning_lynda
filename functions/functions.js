function findBiggestNumber() {
    // a > b ? console.log('a: ' + a) : console.log('b: ' + b);
    var result;
    a > b ? result = ['a: ', a] : result = ['b: ', b];
    return result;
}

a = 5;
b = 6;

// console.log(findBiggestNumber(a, b));
var ans = findBiggestNumber(a, b);
console.log(ans[0] + ans[1]);
