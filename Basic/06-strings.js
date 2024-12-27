// Strings

let myName = "Yeray"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[7])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Yeray"))
console.log(greeting.includes("Yeray"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Yeray", "FaNa5143"))

// Template literals(plantillas literales)
let message = `Hola, 
este es mi
curso de JavaScript`
console.log(message)

console.log(`Hola, ${myName}!`)

let email = "yeray@prueba"
console.log(`Hola, ${myName}! Tu email es ${email}`)