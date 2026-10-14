/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
    let pacientes = [
        {
            id: 1,
            nombre: "Luis",
            edad: 35,
            activo: true
        },
        {
            id: 2,
            nombre: "Carlos",
            edad: 20,
            activo: true
        },
        {
            id: 3,
            nombre: "Luisa",
            edad: 48,
            activo: false
        },
        {
            id: 4,
            nombre: "Maria",
            edad: 18,
            activo: false
        }
    ];

    let pacienteActivo = pacientes.filter(paciente => paciente.activo);
    console.log(pacienteActivo);

    let pacienteNombre = pacientes.map(paciente => paciente.nombre);
    console.log(pacienteNombre);

    let totalEdadesPacientes = pacientes.reduce((acc, paciente) => {
        return acc + paciente.edad
    }, 0);
    console.log(totalEdadesPacientes);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
    let numeros = [1, 2, 3, 4, 5];

    let elevadosAlCubo = numeros.map(numero => {
        return numero ** 3
    });
    console.log(elevadosAlCubo);

    let pares = elevadosAlCubo.filter(numero => numero % 2 === 0);
    console.log(pares);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
    let frutas = ["Manzana", ["Pera", ["Lulo", ["Fresa"]]]];
    let frutasArray = frutas.flat(1);
    console.log(frutasArray);
    frutasArray = frutas.flat(2)
    console.log(frutasArray)

// 4. Ordena un array de números de mayor a menor
    let numerosOrdenados = numeros.sort((a, b) => b - a)
    console.log(numerosOrdenados);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
    const numbers1 = new Set ([1, 3, 6, 9]);
    const numbers2 = new Set ([1, 2, 8, 9, 3,]);

    const union = new Set([...numbers1, ...numbers2]);
    console.log(union)

    const interseccion = new Set([...numbers1].filter(element => numbers2.has(element)))
    console.log(interseccion);

    const diferencia = new Set([...numbers1].filter(element => !numbers2.has(element)));
    console.log(diferencia);

// 6. Itera los resultados del ejercicio anterior
    numbers1.forEach(element => console.log(element));
    numbers2.forEach(element => console.log(element));
    union.forEach(element => console.log(element));

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
    let usuarios = new Map ([
        [1, { nombre: "Edward", edad: 32, email: "edward@gmail.com" }],
        [2, { nombre: "David", edad: 14, email: "david@gmail.com" }],
        [3, { nombre: "Marcela", edad: 55, email: "marcela@gmail.com" }]
    ]);
    usuarios.forEach((value, key) => {
        console.log(key, value)
    });

// 8. Dado el mapa anterior, crea un array con los nombres
    const nombresUsuarios = Array.from(
        usuarios.values(),
        usuario => usuario.nombre
    );
    console.log(nombresUsuarios);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
    let email = [];

    usuarios.forEach(usuario => {
            if(usuario.edad >= 18) {
                email.push(usuario.email);
            }
        })
    
    console.log(email);

    let emailUsuarios = new Set(email);
    console.log(emailUsuarios);
    
// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario