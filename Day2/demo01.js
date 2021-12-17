function main(){
    console.log("A");

    setTimeout(function(){ 
      console.log("B");
    },0);
    runWhileLoopForNSeconds(4);
    console.log("C");
}

function runWhileLoopForNSeconds(n) {
    var start = Date.now();
    var now = start;
    while( now - start < n * 1000) {
        now = Date.now();
    }
}


main();