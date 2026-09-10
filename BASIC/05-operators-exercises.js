/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let a = 5;
    let b = 10;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    const suma = a + b;
    const resta = a - b;
    const multiplicacion = a * b;
    const division = a / b;


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log(a != b);
    console.log(a < b);
    console.log(b > a);
    console.log(a <= 10);
    console.log(a !== b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(b == a);
    console.log(a > b);
    console.log(a != "b");
    console.log(a >= b);
    console.log(a !== b);
// 5. Utiliza el operador lógico and
    console.log(a > b && b < a)
// 6. Utiliza el operador lógico or
    console.log(a <= b || b != a)
// 7. Combina ambos operadores lógicos
        console.log(a <= b || b != a && b > a)
// 8. Añade alguna negación
    console.log(a != b);
// 9. Utiliza el operador ternario
    let sabeIngles = true;

    sabeIngles ? console.log("Si sabe ingles") : console.log("No sabe ingles");

// 10. Combina operadores aritméticos, de comparáción y lógicas

    