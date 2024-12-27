// Operadores

// Operadores Aritmeticos
let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo(resto de la division)
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a++)

b-- // Decremento
console.log(b--)

// Operadores de asignacion
let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

myVariable -= 2
console.log(myVariable)

myVariable *= 2
console.log(myVariable)

myVariable /= 2
console.log(myVariable)

myVariable %= 2
console.log(myVariable)

myVariable **= 2
console.log(myVariable)

// Operadores de comparacion
console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

//Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacias

// Operadores logicos

// Operador "and(&&)"
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 60)

// Operador "or(||)"
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 60)
console.log(5 > 10 && 15 > 20 || 30 > 60)
console.log(5 > 10 && 15 > 20 || 30 < 60)

// Operador "not(!)"
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios
const isRaining = true
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")