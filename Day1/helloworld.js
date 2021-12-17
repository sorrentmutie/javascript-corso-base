console.log("Hello, world");
var person = {
  name: "Salvatore",
  surname: "Sorrentino",
  indiceVisualBasic: -12,
  enabled: true
};

console.log(person.surname);
// console.log(person["surname"]);
person.indiceJavascript = 100;
console.log(person.indiceJavascript);
// delete person.indiceVisualBasic;
console.log(person.indiceVisualBasic);
console.log(person);

console.log(Object.keys(person));

Object.defineProperty(person, "newProperty", {
    value: 42,
    enumerable: true,
    configurable: true,
    writable: true
});

console.log(person);
console.log(Object.keys(person));
console.log(Object.getOwnPropertyDescriptor(person, "newProperty"));

// Object.defineProperty(person, "newProperty",
// {
//     configurable: false
// });

// Object.defineProperty(person, "name",
// {
//     enumerable: false
// });


console.log(Object.getOwnPropertyDescriptor(person, "newProperty"));

//delete person.newProperty;
console.log(person);

// var x = "1";

person.name = "Mario";
console.log(person);
console.log(Object.keys(person));

var valoreIniziale = "Mario";
Object.defineProperty(person,
    "name", {
        get: function(){
            console.log('Sono nel get');
            return valoreIniziale;
        },
        set: function(value){
            console.log('Sono nel set');
            valoreIniziale = value;
        }
});

// console.log(person.name);
// person.name = "Salvatore";
// console.log(person.name);


for(var property in person){
    var value = person[property];
    console.log(value);
}

var studente = {
    matricola: 'AAAA02'
};

Object.setPrototypeOf(studente, person);

console.log(Object.keys(studente));

for(var property in studente){
    var value = studente[property];
    console.log(value);
}