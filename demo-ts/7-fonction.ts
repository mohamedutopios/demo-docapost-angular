// Fonctions avec typage de parametres et retour

function addition(a: number, b: number):number{
    return a + b;
}

console.log(addition(5,9));


// paramètres optionels

function bonjour(name?: string): string{
    return name ? `Hello ${name}` : 'Hello, personne';
}
console.log(bonjour());

// paramètres par défaut

function bonjourDefault(name: string = 'Toto') : string{
    return `Hello, ${name}`;
}

console.log(bonjourDefault());


const add = function(a: number, b: number):number{
    return a + b;
}
console.log(add(7,8));

const addArrow = (a: number, b: number): number => a + b;

console.log(addArrow(8,6));





