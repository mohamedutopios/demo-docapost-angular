// tableau : 
var numbers = [1, 2, 3];
var names = ["Alice", "Bob", "Charlie"];
console.log(names);
names.push("David");
console.log(numbers);
console.log(names);
// tuple :
var tuple = [1, "Alice", true];
console.log(tuple);
var firstElement = tuple[0];
console.log(firstElement);
// union types :
var indicator;
var index1;
//index1 = "Hello"; // Error
indicator = 10;
indicator = "Hello";
//indicator = true; // Error
console.log(indicator);
function display(value) {
    if (typeof value === "number") {
        console.log("The number is ".concat(value));
    }
    else {
        console.log("The string is ".concat(value));
    }
}
display(10);
display("Hello");
var values = [1, "Alice", 10, "Bob"];
console.log(values);
// tableau any : 
var anyArray = [1, "Alice", true, 10, "Bob", { name: "Charlie" }];
console.log(anyArray);
anyArray.push([1, 2, 3]);
console.log(anyArray);
