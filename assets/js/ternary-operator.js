

//// Apertura entresemana : 11 ///
//// Apertura fin de semana : 9 ///


const todayTime = new Date();

let openTime = [0,6].includes(todayTime.getDay()) ? 16 : 11;

let isOpen = todayTime.getHours() >= openTime ? 'We are open': `We are close, today we open at ${openTime}:00`;

console.log(isOpen)


