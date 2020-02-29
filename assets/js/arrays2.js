let games = ['Zelda','Mario','Metroid','ChronoTrigger'];

console.log('LARGO',games.toLocaleString());
console.log(games[games.length-1]);

games.forEach((game,index,gamesArray)=>{
  
})

/* let lastGame = games.pop();
let firstGame = games.shift();

console.log(lastGame,firstGame); */

let newGames = ['Xcom','Ages of Empires','Civilization'];

games.splice(0,2,...newGames)

console.log(games);

let gamesArray = games[0];

console.log(gamesArray.split(''));

let xcom = games.slice();

console.log(xcom);