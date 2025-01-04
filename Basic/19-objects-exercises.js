// 1. Crea un objeto con 3 propiedades.
let person = {
    name: "Yeray",
    age: 19,
    favSport: "Football && MotorSport"
}

console.log(person)

// 2. Accede y muestra su valor.
console.log(person.age)

// 3. Agrega una nueva propiedad.
person.name = "YerayGM"

console.log(person.name)

// 4. Elimina una de las 3 primeras propiedades.
delete person.age

console.log(person)

// 5. Agrega una funcion e invocale.
let person2 = {
    name: "Kevin",
    age: 18,
    favSport: "Football",
    walk: function(){
        console.log("Kevin esta caminando por la acera.")
    }
}

person2.walk()

// 6. Itera las propiedades del objeto.
for (let key in person2) {
    console.log(key + ": " + person2[key])
}

// 7. Crea un objeto anidado.
let person3 = {
    name: "Arthur",
    age: 21,
    favSport: "E-Sports",
    play: function(){
        console.log("Arthur juega al LoL.")
    },
    job:{
        name: "Programador",
        exp: "4",
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.
console.log(person3.job.exp)

// Con un bucle 
for (let key in person3.age) {
    console.log(key + ": " + person3.age[key])
}

// 9. Comprueba si los dos objetos creados son iguales.
console.log(person == person2) // Aunque los dos objetos tengan los mismos datos dara false ya que las referencias de estos dos son distintas.
console.log(person === person2)

function areObjectsEqual(obj1, obj2) {

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Comprobamos si tienen el mismo numero de propiedades
    if (keys1.length !== keys2.length) {
        return false
    }

    // Comprobamos si cada propiedad tiene el mismo valor
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(areObjectsEqual(person, person2))

// 10. Comprueba si dos propiedades diferentes son iguales.
let isSameAgeAndCountry = person2.age === person3.country
console.log(isSameAgeAndCountry) 