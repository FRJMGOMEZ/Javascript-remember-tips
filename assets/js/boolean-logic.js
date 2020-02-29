
const turnBackTrue = ()=>{
    console.log('turnBack true');
    return true;
}

const turnBackFalse = ()=>{
    console.log('Turn-back false');
    return false;
}

/* console.log(!turnBackFalse()) */

/// Es curioso, porque javascript solo le la primera, detecta que es falso y deja de leer (prueba de ello es que solo se va a logear el turnBack false ) ////
/* console.log(turnBackFalse() && turnBackTrue()); */

/// No ejecuta regresa false, porque lee primero el true y le vale con el operador OR ///
/* console.log(turnBackTrue() || turnBackFalse()); */



const iAmUndefined = undefined;
const iAmNull = null;
const iAmFalse = false;


/// Asigna el último valor ///
const a1= true && 'Hi world' && 150;

console.log({a1})

/// Todas las condiciones tiene que ser true para que se asigne true  ///
const a2 = 'Hola' && 'Mundo' && iAmFalse && true;

console.log({a2});


const a3 = iAmFalse || 'Ya no soy false';

console.log({a3});

/// Como encontró el valor string el resto de la asignación no se ejecuta ///
const a4 = iAmFalse || iAmUndefined || iAmNull || 'I am not false again' || true;

console.log({a4})

const a5 =  iAmFalse || iAmUndefined || turnBackTrue();

console.log({a5});