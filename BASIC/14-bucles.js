// Loops o bucles

/// For

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// While --> Evalua antes de cada iteracion
let i = 0;
while (i < 5) {
    console.log(`Hola while ${i}`)
    i++;
}


// Bucle infinito
// while(true) {

// }

// do while --> Minimo una vez se debe ejecutar

i = 0;
do {
    console.log(`Hola do while ${i}`)
    i++
} while (i < 5)

// for of 

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

const myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}
