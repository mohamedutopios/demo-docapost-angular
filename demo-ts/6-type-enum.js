// enum  :
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color[1]);
var Statut;
(function (Statut) {
    Statut[Statut["EnCours"] = 1] = "EnCours";
    Statut[Statut["Termin\u00E9"] = 2] = "Termin\u00E9";
    Statut[Statut["Annul\u00E9"] = 3] = "Annul\u00E9";
})(Statut || (Statut = {}));
console.log(Statut.Annulé);
