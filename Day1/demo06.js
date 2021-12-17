function init(){
    var name = "Salvatore";
    function displayName(){
        // questa è una inner function
        console.log(name);   // name è dichiarato nella function parente
    }
    displayName();
}

// init();

function makeFunc() {
    var name = "Salvatore";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc(); 
myFunc();