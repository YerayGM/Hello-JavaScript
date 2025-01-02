
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.
// Yo lo hare con for basicamente por que los otros no se usan mucho xd (Aun asi abran algunos con while y do while).

// 1. Crea un bucle que imprima los numeros del 1 al 20.
for(let i = 1; i<=20; i++){
    console.log(i)
}

let i = 1
while (i <= 20) {
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado.
let sum = 0
let j = 1
do {
    sum += j
    j++
} while (j <= 100)
console.log(sum)

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50.
for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
let nameArray = ["Yeray", "Juan", "Elvis", "Pablo", "Kevin"]

for(let value of nameArray){
    console.log(value)
}
// 5. Escribe un bucle que cuente el numeros de vocales en una cadena de texto.
let text = "Hola JAVASCRIPT"
let vowelsCount = 0
let vowels = "aeiou"
for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text.toLowerCase()[i])) {
        vowelsCount++
    }
}
console.log(vowelsCount)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto.
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let value of numberArray){
    console.log(value * 2)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
for(i = 1; i<=10; i++){
    console.log(i * 5)
}

// 8. Usa un bucle para invertir una cadena de texto.
let originalString = "JavaScript"
let reversedString = ""
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i]
}
console.log(reversedString)

// 9. Usa un bucle para generar los primeros 10  numeros de la secuencia de Fibonacci.
// Esto lo pille porque no se que mierda era la secuencia de fibonacci.
let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10.
let numArray = [4, 12, 9, 20, 15, 7]
let greaterThanTen = []
for (let num of numArray) {
    if (num > 10) {
        greaterThanTen.push(num)
    }
}
console.log(greaterThanTen)