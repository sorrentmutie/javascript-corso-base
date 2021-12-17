function Person() {

};

Person.prototype.nome = "Mario";
Person.prototype.cognome = "Rossi";
Person.prototype.amici = ['Luigi', "Maria"];

var persona1 = new Person();
var persona2 = new Person();

persona2.nome = "Giuseppe";
persona2.cognome = "Verdi";
persona2.amici.push('Luisa');

console.log(persona2.amici);
console.log(persona1.amici);
