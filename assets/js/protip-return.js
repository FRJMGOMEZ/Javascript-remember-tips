


function createPerson (name,secondName){
   return {
       name,secondName
   }
}


const createPerson2 = (name,secondName) => ({name, secondName})


console.log(createPerson2('Pancho','Martínez')),


function printArgumentos(){
    console.log(arguments)
}

/* printArgumentos('12','panch',3,false); */

/* Parámetro REST */
const printArguments2 = (edad,...args)=>{
    return args
}
/* Destructuring array */
const [mesesDelAnio, nombre, proyectos, casado] = printArguments2(29,'12', 'panch', 3, false);

console.log({ mesesDelAnio, nombre, proyectos, casado});

/* Destructuring object */
let {name:newName,secondName:newSecondName} = createPerson('Michael','Bolton');

console.log(newName,newSecondName);


/* Destructuring params */
const printProperties = ({name,age,rango='soldado raso'})=>{

     return {name,age,rango}
}

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
};

console.log(printProperties(personaje));




