// Les types  :
// number : 
var age = 30;
var price = 99.5;
var hex = 0xf00d;
var binary = 10;
console.log("Age: ".concat(age, ", Price: ").concat(price, ", Hex: ").concat(hex, ", Binary: ").concat(binary));
// string :
var message = "Hello World";
var firstname = "Alice";
var salutation = "Hello ".concat(firstname);
console.log(salutation);
var upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage);
var index = message.indexOf("World");
console.log(index);
var newMessage = message.replace("World", "Alice");
console.log(newMessage);
var subString = message.substring(0, 5);
console.log(subString);
function isValidEmail(email) {
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailPattern.test(email);
}
var email = "mohamed@utopios.net";
console.log(isValidEmail(email));
function capitalizeWords(input) {
    return input.split(" ")
        .map(function (word) { return word.charAt(0)
        .toUpperCase() + word.slice(1); })
        .join(" ");
}
var phrase = "Salut à tous, vous allez bien ou vous etes fatigués ?";
console.log(capitalizeWords(phrase));
