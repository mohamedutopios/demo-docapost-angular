// type literal simple : 

let reponse: "oui" | "non";

reponse = "oui";
reponse = "non";
//reponse = "peut-etre"; // Error

console.log(reponse);

// type literal numerique : 

type Note = 0 | 1 | 2 | 3 | 4 | 5;

let note: Note = 3;
note = 5;
//note = 87;

console.log(note);

// type literal string :

type Direction = "N" | "S" | "E" | "W";

function move(direction: Direction){
    console.log(`Moving ${direction}`);
}

move("N");
// move("SE");

// type literal dans une fonction :

function displayAnswer(answer: "oui" | "non"){
    console.log(`The answer is ${answer}`);
}
displayAnswer("oui");
//displayAnswer("peut-etre");
