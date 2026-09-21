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
  

    function palabrasMayusculas(words) {
        let nuevoArray = [];
        for(let i = 0; i < words.length; i++) {
            nuevoArray.push(words[i].toUpperCase());
        }   
        return nuevoArray;
    }

    console.log(palabrasMayusculas(words));
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    let num;
    function esPrimo(num) {
        if(num <= 1) return false;

        if(num === 2) return true;

        if(num % 2 === 0) return false;

        return true;
        
    }
    console.log(esPrimo(1));
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
    let idiomas1 = ["Ingles", "Español", "Aleman", "Chino", "Polaco"];
    let idiomas2 = ["Portugues", "Ingles", "Japones", "Español", "Polaco"];

    function compararArray(idiomas1, idiomas2) {
        let arrayNuevo = [];

        for(let i = 0; i < idiomas1.length; i++) {

            if(idiomas2.includes(idiomas1[i])) {
                arrayNuevo.push(idiomas1[i])
            }
        }
        return arrayNuevo;
    }
    console.log(compararArray(idiomas1, idiomas2));
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
    const nums = [10, 50, 41, 20, 32, 44];

    function sumaPares(nums) {
        let resultados = 0;

        for(let i = 0; i < nums.length; i++) {

            if(nums[i] % 2 === 0) {
                resultados += nums[i];
            }
        }
        return resultados;
    }
    console.log(sumaPares(nums));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
    let numers = [20, 66, 94, 91, 7];

    function elevadoAlCuadrado(numers){
        let results = [];

        for(let i = 0; i < numers.length; i++) {

            results.push(Math.pow(numers[i], 2));
        }
        return results;
    }
    console.log(elevadoAlCuadrado(numers));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
    const palabras = "Futbol";
   
    function invertirPalabra(palabras) {
        let invertida = "";

        for(let i = palabras.length -1; i >= 0; i--) {
            invertida += palabras[i];
        }
        return invertida;
    }
    console.log(invertirPalabra(palabras));

// 10. Crea una función que calcule el factorial de un número dado

    let nume;

    function factorial(nume) {
        if(nume === 0 || nume === 1) {
            return 1;
        }
        return nume * factorial(nume - 1);
    }
    console.log(factorial(5));
