/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
    const animals =["Caballo", "Vaca", "Perro", "Gato", "Gallina"]
    console.log(animals);

// 2. Añade dos más. Uno al principio y otro al final
    animals.push("Oveja")
    animals.unshift("Toro")
    console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
    animals.splice(2, 1)
    console.log(animals);

// 4. Crea un set que almacene cinco libros
    const libros = new Set(["El principito", "Cien años de soledad", "Caperucita roja", "los tres cerditos", "La cenicienta"]);
    console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
    libros.add("Harry Potter");
    libros.add("La cenicienta")
    console.log(libros);

// 6. Elimina uno concreto a tu elección
    libros.delete("Cien años de soledad");
    console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
    const meses = new Map([
        [1, "Enero"],
        [2, "Febrero"],
        [3, "Marzo"],
        [4, "Abril"],
        [5, "Mayo"],
        [12, "Diciembre"]
    ]);
    console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(meses.has(5));
    console.log(meses.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    meses.set("Verano", ["Junio", "Julio", "Agosto"]);    
    console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    const frutas = ["Manzana", "Pera", "Fresa"];
    const mySet = new Set(frutas);
    const nuevoMap = new Map([
        ["Frutas", mySet]
    ]);
    console.log(mySet);
    console.log(nuevoMap);