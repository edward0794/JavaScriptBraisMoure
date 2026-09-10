// Strings

// Concatenacion

let myName = "Edward"
let greeting = "Hola, " + myName;
console.log(greeting);
console.log(typeof greeting);

// Longitud

console.log(greeting.length);

// Acceso a caracteres

console.log(greeting[1]);
console.log(greeting[6]);

// Metodos comunes

console.log(greeting.toUpperCase()); // Pasar todo a MAyusculas
console.log(greeting.toLowerCase()); // Pasar todo a minusculas   
console.log(greeting.indexOf("Hola")); // Buscar en què indice esta la palabra
console.log(greeting.indexOf("Brais"));
console.log(greeting.indexOf("MoureDev"));
console.log(greeting.includes("Hola")); // Buscar si esta incluida la palabra
console.log(greeting.includes("Brais"));
console.log(greeting.includes("MoureDev"));
console.log(greeting.slice(0, 10)); // Trae solo los caracteres de los indices buscados
console.log(greeting.replace("Brais", "MoureDev")); // reemplza la primera palabra por la otra que se pase

//Template literals

let message = `Hola, este es mi 
curso de JavaScript`
console.log(message);
console.log(`Hola, ${myName}`);