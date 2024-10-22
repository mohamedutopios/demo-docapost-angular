// var : 
function varDemo() {
    console.log(x);
    var x = 10;
    console.log(x);
}
//varDemo();
function varDemo2() {
    if (true) {
        var a = 45;
    }
    console.log(a);
}
//varDemo2();
// let :
function letDemo() {
    //console.log(y);
    var y = 45;
    if (y != undefined) {
        var y_1 = 10;
        console.log(y_1);
    }
    console.log(y);
}
letDemo();
// const :
var PI = 3.14;
// PI = 3.1415;
function constDemo() {
    var x = 10;
    if (x != undefined) {
        var x_1 = 20;
        console.log(x_1);
    }
    // x = 30; lève une erreur
    console.log(x);
}
constDemo();
var arr = [1, 2, 3];
arr.push(4);
console.log(arr);
var obj = { name: "Alice", age: 30 };
obj.age = 31;
console.log(obj);
