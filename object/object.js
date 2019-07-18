var obj = new Object();

// obj.title = 'this is the title of the object';
// obj.val1 = 1;
// obj.val2 = 2;
// obj.fun = function () {
//     console.log('This is console log inside the function of obj');
// }
// obj.fun_ = (function (a, b) {
//     var result;
//     a > b ? result = ['a: ', a] : result = ['b: ', b];
//     console.log('The biggest value is: ', result);
// })(obj.val1, obj.val2);

var obj = {
    title: 'this is the title of the object',
    val1: 1,
    val2: 2,
    findBiggest: function (a, b) {
        var result;
        a > b ? result = ['a: ', a] : result = ['b: ', b];
        console.log('The biggest value is: ', result);
    },
    // fun_: (function (a, b) {
    //     var result;
    //     a > b ? result = ['a: ', a] : result = ['b: ', b];
    //     console.log('The biggest value is: ', result);
    // })(obj.val1, obj.val2),
    increaseVal1: function (value) {
        this.val1 = value;
    }
}



obj.findBiggest(obj.val1, obj.val2);
obj.increaseVal1(5);
obj.findBiggest(obj.val1, obj.val2);