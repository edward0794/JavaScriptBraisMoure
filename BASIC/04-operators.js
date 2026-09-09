//Operadores

//Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b); //suma
console.log(a - b); //resta
console.log(a * b); //multiplicacion
console.log(a / b); //division

console.log(a % b); //residuo
console.log(a ** b); //Potencia

a++ //Incremento
console.log(a);

b-- //Decremento
console.log(b);

//Operadores de asignacion

let myVariable = 2;
console.log(myVariable)
myVariable += 2;
console.log(myVariable);

myVariable -=2
myVariable *=2
myVariable /=2
myVariable %=2
myVariable **=2

//Operadores de comparacion

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 6); //Igualdad por valor
console.log(a == "6"); //Igualdad por valor
console.log(a == a);
console.log(a === a); //Igualdad por identidad (por valor y tipo)
console.log(a === 6);
console.log(a === "6");
console.log(a != 6);

//Operadores logicos 

//and(&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);

//or (||)

console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

//not (!)
console.log(!true);
console.log(!false);

//Operadores ternarios

const isRainnig = true;

isRainnig ? console.log("Esta lloviendo") : console.log("No esta lloviendo");