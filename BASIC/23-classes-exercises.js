/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
    // class Carro {

    //     constructor(marca, año){
    //         this.marca = marca;
    //         this.año = año;
    //     }
    // }
    

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
    // let carro = new Carro("Renault", 2025);
    // console.log(carro);

    let car = new carWhitMethod("Lamborgini", 2026);
    console.log(car);
    car.velocidad();

// 4. Añade un método estático a la primera clase
    
    class Carro {

        constructor(marca, año){
            this.marca = marca;
            this.año = año;
        }
        static sum(a, b) {
            return a + b;
        }
    }
    let carro = new Carro("Renault", 2025);
    console.log(carro);
  

// 5. Haz uso del método estático
    console.log(Carro.sum(5, 5));
// 6. Crea una clase que haga uso de herencia
    class Animal {
        constructor(nombre) {
            this.nombre = nombre;
        }
        sound() {
            console.log("El animal emite un sonido");
        }
    }

    class Perro extends Animal {
        
        constructor(nombre) {
            super(nombre)
        }
    }

    let perro = new Perro("jonasi");

    console.log(perro);
    perro.sound();

// 7. Crea una clase que haga uso de getters y setters
    class Person {
    
        constructor(nombre, apellido, edad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        get name() {
            return this.nombre;
        }
        get edad() {
            return this._edad;
        }
        set edad(edad) {
            this._edad = edad;
        }
    }
    let person = new Person("Camilo", "Torres", 24)
    console.log(person);
// 8. Modifica la clase con getters y setters para que use propiedades privadas
    class Person2 {

        #apellido
        

        constructor(nombre, apellido, edad){
            this.nombre = nombre;
            this.#apellido = apellido;
            this.edad = edad;
        }

        get name() {
            return this.nombre;
        }
        get apellido() {
            return this.#apellido;
        }
        set apellido(apellido) {
            this.#apellido = apellido;
        }
    }
    let person2 = new Person2("Carlos", "Torres", 45);
    console.log(person2);

// 9. Utiliza los get y set y muestra sus valores
    
    console.log(person.name);
    console.log(person.edad);

    person.edad = 25;

    console.log(person.edad);

    console.log(person2.name);
    console.log(person2.apellido);

    person2.apellido = "Gómez";

    console.log(person2.apellido);

// 10. Sobrescribe un método de una clase que utilice herencia 
    class Gato extends Animal {
        
        sound() {
            console.log("Miau!");
        }
    }
    let gato = new Gato("Michi");
    gato.sound();