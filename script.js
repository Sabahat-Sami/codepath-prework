/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
let pattern = [2, 2, 4, 3, 2, 1, 2, 4];
let progress = 0; 
let gamePlaying = false;

let startGame = () => {
  gamePlaying = true;
  progress = 0;
  document.getElementById("startButton").classList.add("hidden")
  document.getElementById("endButton").classList.remove("hidden")
}

let endGame = () => {
  gamePlaying = end;
  
}