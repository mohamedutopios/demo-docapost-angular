// Fonctions avec typage de parametres et retour
function addition(a, b) {
    return a + b;
}
console.log(addition(5, 9));
// paramètres optionels
function bonjour(name) {
    return name ? "Hello ".concat(name) : 'Hello, personne';
}
console.log(bonjour());
// paramètres par défaut
function bonjourDefault(name) {
    if (name === void 0) { name = 'Toto'; }
    return "Hello, ".concat(name);
}
console.log(bonjourDefault());
var add = function (a, b) {
    return a + b;
};
console.log(add(7, 8));
