# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Sabahat Sami

Time spent: 5 hours spent in total

Link to project: (https://glitch.com/edit/#!/artistic-shore-coral)

## Required Functionality

The following **required** functionality is complete:

* [1] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [1] "Start" button toggles between "Start" and "Stop" when clicked. 
* [1] Game buttons each light up and play a sound when clicked. 
* [1] Computer plays back sequence of clues including sound and visual cue for each button
* [1] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [1] User wins the game after guessing a complete pattern
* [1] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [1] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [1] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [1] Computer picks a different pattern each time the game is played
* [1] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/VWcDDVL.gif)

![](https://i.imgur.com/UapLy2l.gif)

![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used websites like W3Wschools to learn more about selecting elements using the dom. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge that I encountered in creating this submission was trying to debug my project. When I used the inspect tools, the console would not show any of the messages I was console logging. This proved especially troublesome when I was trying to implement the feature that would let the buttons light up on their own without clicking on the buttons on myself. The buttons would not light up and I spent a good 30 minutes trying to figure out why it was not working until I realized there was a typo in one of my class names. Another challenge I ran into was playing the sequence of clues. The for loop that I used originally was for(let i = 0; i < progress; i++) However, since progress was initially set to 0 the for loop would never run because the condition would immediately evaluate to false. To fix this I changed the for loop to for(let i = 0; i < progress + 1; i++) in order to account for this. Another way would be to do for(let i = 0; i <= progress; i++). Another challenge I ran into was ending the game properly. The sequence would play an extra time at the end even after I guessed right because I checked for the winning condition before I incremented my progress instead of checking afterwards. There were no major challenges in this project but just a lot of small little problems that would arise that would take me some time to figure out and solve. 



3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
A question I have about web development now is that since this project was front-end based using javascript, HTML, and CSS, what does the backend side of web development look like? Something that I thought about as I was working on the project was it would be an interesting idea to have some sort of database that would store stats such as high scores and guess accuracy but was not sure how I would implement that. I understand that the backend is involved with communicating with the server and interacting with the database, sending necessary data to the front-end side while also processing data. However, how can we connect the server side and the front end side together? I believe that after this project, I’d like to learn more about the backend part of web development.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
One thing that I would like to implement if I had more time would be to do the rest of the optional features. One optional feature in particular I would have liked to implement would have been the ticking clock feature. I’m not sure on how I would approach implementing something like that, but if given a few more hours I would have definitely looked more into it. Another feature that I would have liked to implement would have been storing information from past games and displaying that information to the user. I think in order to do something like that I would have to look into how information is stored and can be retrieved, something that I would need more time to figure out how to implement. 




## Interview Recording URL Link

[My 5-minute Interview Recording]: https://www.loom.com/share/5d6ca42b429347b98fdbc03dd21b631b


## License

    Copyright [Sabahat Sami]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.