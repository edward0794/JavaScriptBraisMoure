/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
    for(let i = 1; i <= 20; i++) {
        console.log(i);
    }

    let i = 1;
    while(i <= 20) {
        console.log(i)
        i++
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
    let total = 0;
    for(let i = 1; i <= 100; i++) {
        total += i
    }
     console.log(total)

    let contador = 0
    i = 1
    while(i <= 100) {
       contador += i
       i++
    }
    console.log(contador)
    
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
    for(i = 1; i <= 50; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }
    }

    i = 1
    while(i <= 50) {
        if(i % 2 === 0) {
            console.log(i)
        }
        i++
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    let nombres = ["Edward", "Andrea", "Carlos", "Jose", "Natalia"];

    for(i = 0; i < nombres.length; i++) {
        console.log(nombres[i])
    }

    i = 0
    while(i < nombres.length) {
        console.log(nombres[i])
        i++
    }
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
    let vocales = ["a", "e", "i", "o", "u"];
    let palabra = "Vacaciones"
    contador = 0;

    for(i = 0; i < palabra.length; i++) {
        if(vocales.includes(palabra[i])) {
            contador++;
        }
    }
    console.log(contador)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
    let numeros = [5, 10, 15, 20];
    let producto = 1;

    for(i = 0; i < numeros.length; i++) {
         producto *= numeros[i]
    }
    console.log(producto)

    i = 0
    producto = 1;
    while(i < numeros.length) {
        producto *= numeros[i]
        i++
    }
    console.log(producto)
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
    let num = 5;
    for(i = 1; i <= 10; i++) {

        let resultado = num * i
        console.log(`${num} * ${i} = ${resultado}`)
    }

    i = 1
    while(i <= 10){
        let resultado = num * i
        console.log(`${num} * ${i} = ${resultado}`)
        i++
    }
// 8. Usa un bucle para invertir una cadena de texto    
    
    let word = "Vacaciones";
    let invertida = "";

    for (let i = palabra.length - 1; i >= 0; i--) {
        invertida += palabra[i];
    }
    console.log(invertida)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
    let a = 0;
    let b = 1;

    for (let i = 0; i < 10; i++) {
        console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    let numbers = [5, 12, 8, 20, 15, 3, 25, 10];
    let mayores = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > 10) {
            mayores.push(numbers[i]);
     }

}

console.log(mayores);

