let juan = {nombre:'Juan'};


///// Los objetos primitivos se asignan por valor y los demás por referencia //////


/// Parámetro spread, rompe el valor-referencia de javascript ///
let ana = {...juan};
ana.nombre = 'Ana';
/* console.log({juan,ana}); */


///// Con el operador spread desreferenciamos el objeto person /////
const changeName = ({...person})=>{
    person.name = 'Toni';
    return person;
}

let peter = {name:'Peter'};

let tony = changeName(peter);

/* console.log({peter,tony}); */

const frutas = ['Manzana','Pera','Piña'];

/// Desreferenciamos el array frutas con el operador spread/////

console.time('spread')
 const otrasFrutas = [...frutas]; 
 console.timeEnd('spread')

console.time('slice')
const masFrutas =frutas.slice();
console.timeEnd('slice')

otrasFrutas.push('Mango');
masFrutas.push('Papaya');
/* 
console.table({frutas,otrasFrutas}); */





