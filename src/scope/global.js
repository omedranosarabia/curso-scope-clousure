// variables

var a; // declarando variable
var b = 'b';  // declarando y asignando variable
var b = 'bb'; // reasignar el valor
var a = 'aa'; // redeclaración



// Global Scope
// Se accede de manera global

var fruit = 'Apple'; // global

function bestFruit() {
    console.log(fruit);
}

function countries() {
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);