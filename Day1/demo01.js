function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.fullName = function(){
       return this.name + " " + this.surname;
    };
}

var mario = new Person("Mario", "Rossi");
console.log(mario.fullName());