// class :
var Person = /** @class */ (function () {
    function Person(name, age) {
        (this.name = name), (this.age = age);
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.bonjour = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years olds.");
    };
    return Person;
}());
var john = new Person("Alain", 67);
console.log(john.bonjour());
