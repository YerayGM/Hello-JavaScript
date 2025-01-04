// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funcion que reciba dos numeros y devuelva su suma.
function myFunc(a, b){
    return a + b
}

let result = myFunc(2, 8)

console.log(result);

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos.
function findMax(numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene.
function countVowels(str) {
    let vowels = "aeiou"
    let count = 0
    let lowerCaseStr = str.toLowerCase()
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
let numeroMin = countVowels("javascript")
console.log(numeroMin)

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas.
function toUpperCaseArray(strings) {
    let upperCaseStrings = []
    for (let i = 0; i < strings.length; i++) {
        upperCaseStrings.push(strings[i].toUpperCase())
    }
    return upperCaseStrings
}

let palabraMayus = toUpperCaseArray("javascript")
console.log(palabraMayus)

// 5. Crea una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario.
function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }return true
}

let prueba = isPrime(1)
console.log(prueba)

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function commonElements(array1, array2) {
    let common = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                common.push(array1[i])
                break
            }
        }
    }
    return common
}

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares.
function sumEvenNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    return sum
}

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado.
function squareNumbers(numbers) {
    let squaredNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i])
    }
    return squaredNumbers
}

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function reverseWords(sentence) {
    let words = sentence.split(" ")
    let reversedWords = []
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i])
    }
    return reversedWords.join(" ")
}

// 10. Crea una funcion que calcule el factorial de un numero dado.
function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1) // Recursividad
}
