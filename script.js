/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
console.log("Hello, world!");
let pattern = [2, 2, 4, 3, 2, 1, 2, 4];
let colorbtn = {
  "red":1,
  "green":2,
  "magenta":3,
  "yellow":4
}
let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;  
let startGame = () => {
  gamePlaying = true;
  progress = 0;
  document.getElementById("startButton").classList.add("hidden")
  document.getElementById("endButton").classList.remove("hidden")
}

let endGame = () => {
  gamePlaying = false;
  document.getElementById("endButton").classList.add("hidden")
  document.getElementById("startButton").classList.remove("hidden")
}

function lightButton(color){
  document.getElementById(color+"Square").classList.add("lit")
}
function clearButton(color){
  document.getElementById(color+"Square").classList.remove("lit")
}
function playSingleClue(color){
  let btn = colorbtn[color];
  lightButton(color);
  playTone(btn, clueHoldTime);
  setTimeout(clearButton, clueHoldTime, btn)
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