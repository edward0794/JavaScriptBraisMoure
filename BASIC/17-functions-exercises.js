/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
    const suma2 = (a, b) => a + b;
    console.log(suma2(10, 10));
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
    let numbers = [2, 4, 6, 8, 10, 80];
  
    function numeroMayor(numbers) {

    let numMayor = numbers[0];

        for(i = 0; i < numbers.length; i++) {

            if(numbers[i] > numMayor) {
                numMayor = numbers[i]
            }
        }
        return numMayor;
    }
    console.log(numeroMayor(numbers));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
    let  palabra = "aeronave"
    let vocales = ["a", "e", "i", "o", "u"];

    function recibirPalabra(palabra) {
    let contador = 0;

        for(let i = 0; i < palabra.length; i++) {

            if(vocales.includes(palabra[i])) {
                contador++
            }
        }
        return contador;
    }
    console.log(recibirPalabra(palabra));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
    let words = ["elefante", "casa", "carro"];
    let nuevoArray = [];

    function palabrasMayusculas(words) {

        for(let i = 0; i < words.length; i++) {
            nuevoArray.push(words[i].toUpperCase());
        }   
        return nuevoArray;
    }

    console.log(palabrasMayusculas(words));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado