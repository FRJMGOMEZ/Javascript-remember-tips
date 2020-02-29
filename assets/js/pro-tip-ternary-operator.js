



const theBigger = (a,b) => (a > b) ? a: b;

console.log(theBigger(10,98));

const friend = false;

const friendsArr = [
    'Peter',
    'Dani',
    friend?'Thor':'Loki',
    //Función autoinvocada//
    (()=> 'Nick Fury')()];

console.table({friendsArr});

///////////////////////////

const nota = 85;


/// Ampliación del concimiento de capacidades de los operadores ternarios ///
const grade = nota >= 95 ? 'A+':
              nota >= 90 ? 'A-':
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C':
              'F';

console.log({grade})


