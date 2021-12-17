function sum(a,b){
    console.log(this)
    return a+b;
}

console.log(sum(1,2));