let a = 5;

const hoy = new Date();
let day = hoy.getDay();

console.log({day});

if(day === '6'){
    console.log('Sunday')
}else{
    console.log('Not Sunday')
}

if (day == '6') {
    console.log('Sunday')
} else {
    console.log('Not Sunday')
}

//// La diferencia entre el == y el === es que el primero no va a tener en cuenta el tipado en la operaci´çon, mientras que el segundo, si lo va a hacer ///

//// ALTERNATIVA A SWITCH & IF & ELSE ////

day = 6;

const daysLetters = {
   0:()=>'domingo',
   1:()=>'lunes',
   2:()=>'martes',
   3:()=>'miércoles',
   4:()=>'jueves',
   5:()=>'viernes',
   6:()=>'sábado' 
}

console.log(daysLetters[day]())
