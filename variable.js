// var x = 10;
// let y = 20;
// const z = 30;

// console.log(x);

// console.log("jangan lupa untuk mengupdate kode kamu " + z);


// == var == //
console.log(" === var === ");
console.log(x); // undefined, bukan error!
var x = 10;
// == let == //
console.log(" === let === ");
console.log(y); // Error: Cannot access 'y' before initialization
let y = 10;
// == const == //
const z = 10;
z = 10; // Error: Assignment to constant variable.