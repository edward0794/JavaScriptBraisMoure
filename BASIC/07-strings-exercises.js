/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
    let nombre = "Edward"
    let mensaje = "Hola, " + nombre;
    console.log(mensaje);

// 2. Muestra la longitud de una cadena de texto
    console.log(mensaje.length)
// 3. Muestra el primer y último carácter de un string
    console.log(mensaje[0])
    console.log(mensaje[11])
// 4. Convierte a mayúsculas y minúsculas un string
    console.log(mensaje.toLowerCase());
    console.log(mensaje.toUpperCase());
// 5. Crea una cadena de texto en varias líneas
    console.log(`estos son los
ejercicios de strings`);
// 6. Interpola el valor de una variable en un string
        console.log(`hola, ${nombre}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
        console.log(mensaje.replace(/\s/g, ""));
// 8. Comprueba si una cadena de texto contiene una palabra concreta
        console.log(mensaje.includes("Edward"));
// 9. Comprueba si dos strings son iguales
        const sonIguales = nombre === mensaje;
        console.log(sonIguales)
// 10. Comprueba si dos strings tienen la misma longitud    
        const mismaLongitud = nombre.length === mensaje.length;
        console.log(mismaLongitud)