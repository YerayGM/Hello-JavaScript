// 1. Crea una variable para cada operacion aritmetica.
let a = 20
let b = 30
let c = 10

console.log(a + b + c)
console.log(a - b - c)
console.log(a * b * c)
console.log(a / b / c)
console.log(a % b % c)
console.log(a ** b ** c)
a++
console.log(a++)
a--
console.log(b--)

// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas.
let myVariable = 5
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

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparacion.
console.log(5 > 3)
console.log(3 == 3)
console.log(5 >= 4)
console.log(6 === 6)
console.log(6 !== 7)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion.
console.log(5 > 10)
console.log(7 == 4)
console.log(8 <= 5)
console.log(9 === "4")
console.log(7 !== 7)

// 5. Utiliza el operador logico and.
console.log(50 == 50 && 40 == 40)

// 6. Utiliza el operador logico or.
console.log(50 == 60 || 40 == 40)

// 7. Combina ambos operadores logicos.
console.log(3 == 2 && 4 == 3 || 40 === 40)

// 8. Añade alguna negacion.
console.log(3 !== 2 && 4 == 3 || 40 === 40)

// 9. Utiliza el operador ternario.
const isStudent = true
isStudent ? console.log("Es estudiante") : console.log("No es estudiante")

// 10. Combina operadores aritmaticos, de comparacion y logicas.
let result = (5 + 3) * 2 > 10 && (4 * 2) === 8;
console.log(result)