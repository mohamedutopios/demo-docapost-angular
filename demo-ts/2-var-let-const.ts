// var : 

function varDemo() {
   console.log(x);
    var x = 10;
    console.log(x);
}
//varDemo();

function varDemo2() {
    if(true){
        var a = 45;
    }
    console.log(a);
}

//varDemo2();

// let :

function letDemo() {
    //console.log(y);
    let y = 45;
    if(y!=undefined){
    let y = 10;
    console.log(y);
    }
    console.log(y);
}
letDemo();

// const :

const PI = 3.14;
// PI = 3.1415;

function constDemo() {
    const x = 10;
    if(x!=undefined){
        const x = 20;
        console.log(x);
    }
   // x = 30; lève une erreur
    console.log(x);

}
constDemo();

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

const obj = {name: "Alice", age: 30};
obj.age = 31;
console.log(obj);