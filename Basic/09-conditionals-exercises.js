// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let name = "Yeray"
if(name === "Yeray"){
    console.log(`Tu nombre es ${name}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos.
let user = "FaNa5143"
let password = 123456

if(user === "FaNa5143" && password === 123456){
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje.
let number = "3"

if(number > 0){
    console.log("El numero es positivo")
} else if(number < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan.
let age = 16
if(age >= 18){
    console.log("Usted es mayor de edad, puede votar")
} else {
    console.log(`Usted es menor de edad y no puede votar, le quedan ${18 - age} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
let category = age >= 18 ? "Es adluto" : "Es menor"
console.log(category)

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes".
let month = 4

if(month >= 4 && month <= 6){
    console.log("Estamos en primavera")
} else if(month >= 7 && month <= 8){
    console.log("Estamos en verano")
} else if(month >= 9 && month <= 12){
    console.log("Estamos en Otoño")
} else {
    console.log("Estamos en Invierno")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior.
if (month === 2) {
    console.log("28 o 29 dias")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 dias")
} else {
    console.log("31 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
lenguage = "eps"
switch(lenguage){
    case "es":
        console.log("Hola, buenas noches!")
        break
    case "en":
        console.log("Hello, good night")
        break
    case "fr":
        console.log("Bonjour, bonne nuit")
        break
    default:
        console.log("This navegator dont support this language, please choose another lenguage please")
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("OtoÃ±o")
        break
    default:
        console.log("Invierno")
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7.
switch (month) {
    case 2:
        console.log("28 o 29 dÃ­as")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dÃ­as")
        break
    default:
        console.log("31 dÃ­as")
}