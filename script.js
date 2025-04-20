function rolldice(){
const times = document.getElementById("times").value;
const dice  = document.getElementById("dice");
const diceimg = document.getElementById("diceimage");

const value = [];
const img =[];

for(let i =0; i< times;i++){
let result = Math.floor(Math.random()*6 + 1);
value.push(result);

img.push(`<img src="${result}.png" alt = "Dice${result}">`);
}
dice.textContent = `Dice: ${value.join(', ')}`;
diceimg.innerHTML = img.join('');
}
