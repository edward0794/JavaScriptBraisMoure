// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let nombre = "Edward";

    if(nombre === "Edward") {
        console.log("Hola, Edward");
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    const usuario = "David56888";
    const contraseña = "123@";

    if(usuario === "David56888" && contraseña === "123@") {
        console.log("Ingreso permitido")
    };
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let num = -5;

    if(num > 0 ) {
        console.log("El número es positivo")
    }else if(num < 0) {
        console.log("El número es negativo")
    }else {
        console.log("El número es 0")
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    const edad = 25;
    const edadMayor = 18;

    if(edad >= edadMayor) {
        console.log("La persona puede votar");
    }else{
        const resultado = edadMayor - edad;
        console.log(`La persona no puede votar, le faltan ${resultado} años.`);
    }
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
    const edadAdulto = 5;

    console.log(edadAdulto >= 18 ? "Adulto" : "Menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
    const mes = "Febrero";

    if(mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
        console.log("Estamos en primavera")
    }else if(mes === "Junio" || mes === "Julio" || mes === "Agosto") {
        console.log("Estamos en verano")
    }else if(mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
        console.log("Estamos en otoño")
    }else if(mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
        console.log("Estamos en invierno")
    }else {
        console.log("Mes no encontrado")
    }
         
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
    if(mes === "Enero" || mes === "Marzo" || mes === "Mayo" || mes === "Julio" || mes === "Agosto" || mes === "Octubre" || mes ===  "Diciembre") {
        console.log("El mes tiene 31 dias");
    }else if(mes === "Abril" || mes === "Junio" || mes === "Septiembre" || mes === "Noviembre") {
        console.log("El mes tiene 30 dias");
    }else if(mes === "Febrero"){
        console.log("El mes tiene 28 dias")
    }else {
        console.log("Mes no encontrado")
    }
        
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    let idioma = 2
    let saludo

    switch (idioma) {
        case 0:
            saludo = "Hi, welcome"
            break
        case 1:
            saludo = "Hola, bienvenido"
            break
        case 2:
            saludo = "Olá, bem-vindo."
            break
        case 3: 
            saludo = "Hallo, willkommen."
            break
        default:
            saludo = "Idioma no encontrado"
    }
    console.log(saludo);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
    let estacion;
    
    switch (mes) {
        case 0: 
            estacion = "primavera"
            break
        case 1:
            estacion = "primavera"
            break
        case 2: 
            estacion = "primavera"
            break
        case 3: 
            estacion = "Verano"
            break
        case 4: 
            estacion = "Verano"
            break
        case 5: 
            estacion = "Verano"
            break
        case 6: 
            estacion = "Otoño"
            break
        case 7: 
            estacion = "Otoño"
            break
        case 8: 
            estacion = "Otoño"
            break
        case 9: 
            estacion = "Invierno"
            break
        case 10: 
            estacion = "Invierno"
            break
        case 11: 
            estacion = "Invierno"
            break
        default:
            estacion = "Estacion no encontrada"
    }
    console.log(estacion)
// 10. Usa un switch para hacer de nuevo el ejercicio 7