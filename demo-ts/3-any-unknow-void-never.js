// any : 
var anyValue = 10;
anyValue = "Hello";
anyValue = true;
console.log(anyValue);
// unknow : C'est comme any mais il impose de vérifier le type avant de l'utiliser
var unknownValue = "test";
if (typeof unknownValue === "string") {
    var str = unknownValue;
    console.log(str);
}
unknownValue = 10;
if (typeof unknownValue === "number") {
    var nombre = unknownValue;
    console.log(nombre);
}
// void :
function sayHello() {
    console.log("Hello");
}
// never :
function throwError(message) {
    throw new Error(message);
}
//throwError("Erreur critique");
function infiniteLoop() {
    while (true) {
        console.log("Looping");
    }
}
infiniteLoop();
