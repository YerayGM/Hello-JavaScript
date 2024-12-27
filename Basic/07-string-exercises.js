// 1. Concatena dos cadenas de texto.
let marcaMoto = "Yamaha"
let modeloMoto = "MT-09"
let anuncio = "Esta es la nueva " + marcaMoto + " " + modeloMoto + "!"
console.log(anuncio)
// 2. Muestra la longitud de una cadena de texto.
console.log(anuncio.length)

// 3. Muestra el primer y ultimo caracter de un string.
console.log(anuncio[0])
console.log(anuncio[anuncio.length - 1])

// 4. Convierte a mayusculas y minusculas un string.
console.log(anuncio.toUpperCase())
console.log(anuncio.toLowerCase())

// 5. Crea una cadena de texto en varias lineas.
console.log(`Esta es la nueva 
${marcaMoto} ${modeloMoto}!`)

// 6. Interpola el valor de una variable en un string.
let lenguaje = "JavaScript"
let frase = `Estoy aprendiendo ${lenguaje}`
console.log(frase)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
let frase2 = "Mi nombre es Yeray Garcia"
let quitarEspacios = frase2.replace(/ /g, "-")
console.log(quitarEspacios)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(anuncio.includes("Yamaha"))

// 9. Comprueba si dos strings son iguales.
let string1 = "HolaDude"
let string2 = "HolaDude"
console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(string1.length === string2.length)