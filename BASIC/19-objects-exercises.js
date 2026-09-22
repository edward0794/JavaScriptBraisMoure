/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
    let person = {
        nombre: "Edward",
        edad: 32,
        ciudad: "Montería"
    };
// 2. Accede y muestra su valor
    console.log(person);
// 3. Agrega una nueva propiedad
    person.apellido = "Tapia";
    console.log(person);
// 4. Elimina una de las 3 primeras propiedades
    delete person.edad;
    console.log(person);
// 5. Agrega una función e invócala
    person = {
        nombre: "Edward",
        edad: 32,
        ciudad: "Montería",
        trabajo: function() {
            console.log("Es programador")
        }
    };
    person.trabajo();
// 6. Itera las propiedades del objeto
    for(let key in person) {
        console.log(key + "; " + person[key]);
    }
// 7. Crea un objeto anidado
    person2 = {
        nombre: "Edward",
        edad: 32,
        ciudad: "Montería",
        trabajo: function() {
            console.log("Es programador")
        },
        idioma: {
            ingles: "A2",
            español: "Nativo"
        }
    };
    console.log(person2);
// 8. Accede y muestra el valor de las propiedades anidadas
    console.log(person2.nombre);  
    console.log(person2.idioma);  
// 9. Comprueba si los dos objetos creados son iguales
    console.log(person === person2);
// 10. Comprueba si dos propiedades diferentes son iguales
    console.log(person.edad === person2.edad);