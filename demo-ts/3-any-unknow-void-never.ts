// any : 

let anyValue: any = 10;
anyValue = "Hello";
anyValue = true;

console.log(anyValue);

// unknow : C'est comme any mais il impose de vérifier le type avant de l'utiliser

let unknownValue: unknown = "test";

if(typeof unknownValue === "string"){
let str: string = unknownValue; 
console.log(str);
}

unknownValue = 10;
if(typeof unknownValue === "number"){
    let nombre: number = unknownValue; 
    console.log(nombre);
}

// void :

function sayHello(): void{
    console.log("Hello");
}


// never : trouver exemple plus pertinent.

