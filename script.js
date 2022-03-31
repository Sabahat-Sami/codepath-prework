/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
console.log("Hello, world!");


let colorbtn = {
  1:"red",
  2:"green",
  3:"magenta",
  4:"yellow"
}

let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;  
let guessCounter = 0;
let NUM_OF_BUTTONS = 4;
let strikes = 0;
let pattern = []
let STRIKES_ALLOWED = 3;

let generateRandomPattern = () => {
  let pattern = []
  let randLength = Math.floor(Math.random() * 10 + 1)
  for(let i = 0; i < randLength; i++){
    pattern.push(Math.floor(Math.random() * (NUM_OF_BUTTONS) + 1))
  }
  return pattern;
}

let startGame = () => {
  gamePlaying = true;
  progress = 0;
  pattern = generateRandomPattern();
  alert(pattern);
  document.getElementById("startButton").classList.add("hidden")
  document.getElementById("endButton").classList.remove("hidden")
  playClueSequence();

}

let endGame = () => {
  gamePlaying = false;
  document.getElementById("endButton").classList.add("hidden")
  document.getElementById("startButton").classList.remove("hidden")
}

function lightButton(color){
  console.log(color+"Square");
  document.getElementById(color+"Square").classList.add("lit")
}

function clearButton(color){
  document.getElementById(color+"Square").classList.remove("lit")
}

function playSingleClue(btn){
  let color = colorbtn[btn];
  lightButton(color);
  playTone(btn, clueHoldTime);
  setTimeout(clearButton, clueHoldTime, color)
}

let playClueSequence = () => {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i = 0; i < progress+1; i++){
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

let loseGame = () => {
  endGame();
  alert("You Lost!")
}

let winGame = () => {
  endGame();
  alert("You Won!")
}

let guess = (btn) => {
  if(!gamePlaying){
    return;
  }
  
  if(btn === pattern[guessCounter]){
    if(guessCounter !== progress){
      guessCounter += 1
    }
    else{
        progress += 1
        if(progress === pattern.length){
          winGame();
        }
        else{
          playClueSequence()
        }
        }
      } 
  else  {
    if(strikes === STRIKES_ALLOWED){
      loseGame()
    }
    else{
      strikes += 1
    }
  }



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)