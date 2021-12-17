var mySum = function (a,b) {
    return a+b;
}

var myDifference = function (a,b) {
    return a-b;
}

var myMultiplication = function (a,b) {
    return a*b;
}

var myDivision = function (a,b) {
    return a/b;
}

var myFunction2 = function(a,b, operator){
    return isNaN(operator(a,b));
}

// console.log(myFunction(1,2));
console.log(myFunction2(1,2,myDifference));
console.log(myFunction2("1","a",myDifference));

function MyFunction(a,b){
    return isNaN(a*b);
}

console.log(MyFunction("q",2));

{
    
}