// Les types  :

// number : 
let age: number = 30;
let price: number = 99.5;
let hex: number = 0xf00d;
let binary: number = 0b1010;


console.log(`Age: ${age}, Price: ${price}, Hex: ${hex}, Binary: ${binary}`);

// string :

let message: string = "Hello World";
let firstname: string = "Alice";
let salutation: string = `Hello ${firstname}`;

console.log(salutation)

let upperCaseMessage: string = message.toUpperCase();
console.log(upperCaseMessage);

let index: number = message.indexOf("World");
console.log(index);

let newMessage : string = message.replace("World", "Alice");
console.log(newMessage);

let subString: string = message.substring(0, 5);
console.log(subString);

function isValidEmail(email: string): boolean{
    let emailPattern: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);

}

let email: string = "mohamed@utopios.net";
console.log(isValidEmail(email));

function capitalizeWords(input: string): string{
    return input.split(" ")
    .map(word => word.charAt(0)
    .toUpperCase() + word.slice(1))
    .join(" ");
}

let phrase: string = "Salut à tous, vous allez bien ou vous etes fatigués ?";
console.log(capitalizeWords(phrase));
