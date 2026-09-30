/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
    export function suma(a, b) {
        return a + b
    };

    console.log(suma(5, 10));

// 2. Exporta una constante
    export const nombre = "Edward";

    console.log(nombre);

// 3. Exporta una clase
    export class Perro {

        constructor(nombre, raza) {
            this.nombre = nombre;
            this.raza = raza;
        }
    }

// 4. Importa una función
    import { add, Circle } from "./28-export-modules";
    console.log(add(10, 10));

// 5. Importa una constante
    import { PI } from "./28-export-modules";
    console.log(PI);

// 6. Importa una clase
    // import { Circle } from "./28-export-modules";
    let circle = new Circle(10);
    console.log(circle);

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
    
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior