let a = "A";
let b = "B";
let c = "C";

const aTemp = a;
a = b;
b = c;
c = aTemp;

console.log(a, b, c);