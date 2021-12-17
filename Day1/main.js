function  addDiv(div1, text){
    var nuovoDiv = document.createElement("div");
    var contenuto = document.createTextNode(text);
    nuovoDiv.appendChild(contenuto);
    var currentDiv = document.getElementById(div1);
    document.body.insertBefore(nuovoDiv, currentDiv);
}

function addDivByName(div1, text) {
    var nuovoDiv = document.createElement("div");
    var contenuto = document.createTextNode(text);
    nuovoDiv.appendChild(contenuto);
    document.body.insertBefore(nuovoDiv, div1);
}

document.getElementById("addButton").addEventListener
    ("click", function(){
        var currentDiv = document.getElementById("div1");
        var text = Math.random();
        addDivByName(currentDiv, text);
});