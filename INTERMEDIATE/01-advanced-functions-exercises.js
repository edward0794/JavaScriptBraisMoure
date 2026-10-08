/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función
    const listeningMusic = function music (name) {
        console.log(`Estoy escuchando un vallenato llamado: ${name}`)
    };
    
    function returnMusic() {
        return listeningMusic
    }

    const music = returnMusic()
    music("Ilusiones")
  
// 2. Implementa una función currificada que multiplique 3 números
    function curryMulti(a) {
        return function(b) {
            return function(c) {
                return a * b * c
            }
        }
    }
    const multiplicar = curryMulti(5)(4)(2);
    console.log(multiplicar);

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
    function calcularPotencia(n, expo) {
        if(expo === 0) {
            return 1;
        }
        return n * calcularPotencia(n, expo -1);
    }
    console.log(calcularPotencia(2, 3));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
    function createCounter(num) {
        let counter = num
        return {
            increment: function() {
                counter++
            },
            decrement: function() {
                counter--
            },
            getValue: function() {
                return counter;
            }
        }
    }
    let counter = createCounter(10);
    console.log(counter.getValue());
    
    counter.increment()
    console.log(counter.getValue())

    counter.decrement()
    console.log(counter.getValue())
    
// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
    function sumManyTimes(multiplier, ...numbers) {
        let resultado = 0;
        for(let number of numbers) {
            resultado += number
        }    
        resultado *= multiplier

        return resultado;
    }

    console.log(sumManyTimes(2, 4, 4));

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
    function procesarSuma(data, cb) {
        let resul = 0;
        for(let dat of data){
            resul += dat
        }
        cb(resul)
    }

    function procesarResultado(resul){
        console.log(`El resultado es: ${resul}`)
    }

    procesarSuma([2, 2, 4, 8], procesarResultado);

// 7. Desarrolla una función parcial
    function partialSum(a) {
    return function (b, c) {
        return a + b + c
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// 8. Implementa un ejemplo que haga uso de Spread
    const numeros = [2, 5, 10, 80, 114];

    function sumWithSpread(a, b, c, d, e) {
        return a + b + c + d + e
    }
    console.log(sumWithSpread(...numeros));

// 9. Implementa un retorno implícito
    const multi = (a, b) => a * b
    console.log(multi(5, 2));

// 10. Haz uso del this léxico
    const greet = {
        nombre: "Edward",
        apellido: "Tapia",
        greeting: function() {
            console.log(`¡Hola ${this.nombre}, mucho gusto!`)
        }
    }

greet.greeting();