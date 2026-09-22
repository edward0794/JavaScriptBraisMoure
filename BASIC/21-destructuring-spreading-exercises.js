/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
    let myArray = [1, 2, 3, 4, 5];

    let [value0, value1] = myArray;
    console.log(value0);
    console.log(value1);

    let perro = {
        nombre: "Jonasi",
        raza: "Pitbull",
        sexo: "Macho",
        especial: function rastrear() {
            console.log("El perro es experto en rastrear personas");
        },
        job: {
            nombreJob: "FBI",
            exp: 5
        }
    };
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
    let myArray2 = [7, 8, 9, 10];

    let [value7, value8, value9, value10, value11 = 11] = myArray2;
    console.log(value7);
    console.log(value8);
    console.log(value9);
    console.log(value10);
    console.log(value11);

// 3. Usa desestructuración para extraer dos propiedades de un objeto   
    let frutas = {
        fruta1: "Manzana",
        fruta2: "Fresas",
        fruta3: "Peras",
        fruta4: "Mangos"
    };

    let { fruta1, fruta2 } = frutas;

    console.log(fruta1);
    console.log(fruta2);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
    let { nombre: nombre2, raza: raza2 } = perro;
    console.log(nombre2);
    console.log(raza2);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
    let { nombre: nombre3, job: { nombreJob } } = perro;

    console.log(nombre3);
    console.log(nombreJob);
// 6. Usa propagación para combinar dos arrays en uno nuevo
    let myArray3 = [... myArray, ...myArray2];
    console.log(myArray3);

// 7. Usa propagación para crear una copia de un array
    let myArray4 = [...myArray];
    console.log(myArray4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
    let myObjeto = {...perro, ...frutas};
    console.log(myObjeto);

// 9. Usa propagación para crear una copia de un objeto
    let myObjeto2 = { ...perro };
    console.log(myObjeto2);

// 10. Combina desestructuración y propagación
    let combinacion = { nombre, ...resto } = perro;
    console.log(combinacion);