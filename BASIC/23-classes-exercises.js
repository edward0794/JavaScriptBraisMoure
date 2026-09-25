/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
    class Carro {

        constructor(marca, año){
            this.marca = marca;
            this.año = año;
        }
    }
    

// 2. Añade un método a la clase que utilice las propiedades
    class carWhitMethod {

        constructor(marca, año){
            this.marca = marca;
            this.año = año;
        }
        velocidad() {
            console.log("El carro toma una velocidad de 100 km/h en 1 minuto")
        }
    }
    
// 3. Muestra los valores de las propiedades e invoca a la función
    let carro = new Carro("Renault", 2025);
    console.log(carro);

    let car = new carWhitMethod("Lamborgini", 2026);
    console.log(car);
    car.velocidad();

// 4. Añade un método estático a la primera clase
    
// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 