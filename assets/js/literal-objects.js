


let personaje = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    alive: false,
    age: 40,
    chords: {
        lat: 34.44,
        lng: -118.98
    },
    suits: ['Mark1', 'MarkV', 'Hulkbuster'],
    address: {
        zip: '10880,90265',
        location: 'Malibu,California'
    }
}


 /// Eliminamos propiedad del objeto literal //
delete personaje.name;

let entriesPares = Object.entries(personaje);

console.log({entriesPares});

 /// Congelamos las propiedades del objeto literal para que no puedan ser alteradas //
Object.freeze(personaje);

personaje.money = 1238128319083020321093802830921;

console.log(personaje);

// Obtenemos las keys del objeto literal, en forma de array //
const propiedades = Object.getOwnPropertyNames(personaje);

console.log({propiedades});

// Obtenemos los valores del objeto literal, en forma de array //
const values = Object.values(personaje);

console.log({values});