
function saludar (name){
    console.log(arguments);
    console.log('Hello'+ name)
}

const saludar2 = function(){
    console.log('Hello')
}

saludar('Pancho',true,29);

const saludar3 = ()=>{

console.log('Hi arrow')
}

const getAleatorio = ()=>Math.random();

console.log(getAleatorio());