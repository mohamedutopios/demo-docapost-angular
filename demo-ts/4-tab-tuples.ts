// tableau : 

let numbers: number[] = [1, 2, 3];
const names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names);
names.push("David");

console.log(numbers);
console.log(names);

// tuple :

let tuple: [number, string, boolean] = [1, "Alice", true];
console.log(tuple);
let firstElement: number = tuple[0];
console.log(firstElement);

// union types :

let indicator: number | string;
let index1: number;
//index1 = "Hello"; // Error
indicator = 10;
indicator = "Hello";
//indicator = true; // Error
console.log(indicator);

function display(value: number | string){
  if(typeof value === "number"){
    console.log(`The number is ${value}`);
  }else{
    console.log(`The string is ${value}`);
  }
}
display(10);
display("Hello");

let values: (number | string)[] = [1, "Alice", 10, "Bob"];

console.log(values);

// tableau any : 

let anyArray: any[] = [1, "Alice", true, 10, "Bob", {name: "Charlie"}];
console.log(anyArray);
anyArray.push([1, 2, 3]);
console.log(anyArray);


