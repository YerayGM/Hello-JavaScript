// 1. Crea un array que almacene cinco animales.
let myArray = []
myArray = ["Perro", "Gato", "Pez", "Tortuga", "Hamster"]
console.log(myArray)

// 2. Añade dos mas. Uno al principio y otro al final.
myArray.unshift("Conejo")
myArray.push("Leon")
console.log(myArray)

// Una forma regulera (no recomendable).
myArray.splice(0,0, "Leon")
myArray.splice(6,6, "Oso Panda")
console.log(myArray)

// 3. Elimina el que se encuentra en tercera posicion.
myArray.splice(2, 1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros.
mySet = new Set(["HarryPotter", "StarWars", "Rapunzel", "Casanova", "Los7Enanitos"])
console.log(mySet)

// 5. Añade dos mas. Uno de ellos repetido.
mySet.add("Hobbit", "StarWars")
console.log(mySet)

// 6. Elimina uno concreto a tu eleccion.
mySet.delete("Los7Enanitos")
console.log(mySet)

// 7. Crea un mapa que asocie el numero del mes a su nombre.
let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(myMap)

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor.
if(myMap.has(5)){
    console.log(myMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.
myMap.set("summerMonths", ["Junio", "Julio", "Agosto"])
console.log(myMap.get("summerMonths"))

// 10. Crea un Array, transformalo a un Set y almacenalo en un Map.
let fruitsArray = ["manzana", "platano", "naranja", "manzana"]
console.log(fruitsArray)
let fruitsSet = new Set(fruitsArray)
console.log(fruitsSet)
let fruitsMap = new Map()
fruitsMap.set("fruits", fruitsSet)
console.log(fruitsMap)
console.log(fruitsMap.get("fruits"))