// 1. Escribe un comentario en una linea.

// Este es un comentario en una linea.

// 2. Escribe un comentario en varias lineas.

/*
Este es
un comentario
en varias lineas.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

let stringVar = "¡Hola, JavaScript"
let numberVar = 37
let booleanVar = true
let nullVar = null
let undefinedVar
let bigIntVar = BigInt(9007199254740991)
let symbolVar = Symbol("unique")

// 4. Imprime por consola el valor de todas las variables.

console.log(stringVar)
console.log(numberVar)
console.log(booleanVar)
console.log(nullVar)
console.log(undefinedVar)
console.log(bigIntVar)
console.log(symbolVar)

// 5. Imprime por consola el tipo de todas las variables.

console.log(typeof stringVar)
console.log(typeof numberVar)
console.log(typeof booleanVar)
console.log(typeof nullVar)
console.log(typeof undefinedVar)
console.log(typeof bigIntVar)
console.log(typeof symbolVar)

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo.

stringVar = "¡Adios, JavaScript!"
numberVar = 19
booleanVar = true
nullVar = null
undefinedVar = undefined
bigIntVar = BigInt(204029830498234)
symbolVar = Symbol("algo")

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo.

stringVar = 122
numberVar = "Yeray García"
booleanVar = "true"
nullVar = BigInt(20958028402384)
undefinedVar = true
bigIntVar = 7.23
symbolVar = null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

const constString = "Soy una constante"
const constNumber = 37
const constBoolean = false
const constNull = null
const constUndefined = undefined
const constBigInt = BigInt(789654123)
const constSymbol = Symbol("constantSymbol")

// 9. A continuacion, modifica los valores de las constantes.

// constString = "Nueva constante"
// constNumber = 38
// constBoolean = true
// constNull = "null"
// constUndefined = null
// constBigInt = BigInt(987654321)
// constSymbol = Symbol("newConsatntSymbol")

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse.

// Modificado en el ejercicio 9.