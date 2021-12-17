var prototipo = {
    name: "Mario",
    surname: "Rossi"
};

var studente = Object.create(prototipo);
studente.fullName = function(){
    return this.name + " " + this.surname;
 };

 console.log(studente.fullName());