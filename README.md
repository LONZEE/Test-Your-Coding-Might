## Marketing Page README

## Acceptance Criteria for Challenge
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score


## Repository Guide (HTML)
* line 7 linked to style.css
* line 8 Title (Coding Quiz)
* line 10 body begins
* line 14-18 are id tags to able to link to JavaScript as well Style sheet
* line 20 linked JavaScript 
## Repository Guide (CSS)
* line 1-8 identifies how the body will positioned
* line 22, line 27, line 32, line 42 are in using the # to link to html (#quiz-container,#question-container) 
* line 56 added a hover effect
* line 65 added @keyframes feature I learned through https://www.joshwcomeau.com/animation/keyframe-animations
## Repository Guide (JavaScript)
* line 1 array of questions
* Used https://www.sanfoundry.com/1000-javascript-questions-answers to add questions and answers.
* line 30 index of current question
* line 33 get high score from local storage
* line 35 starts the quiz
* line 37 gets the start button by using document.getElementById (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* line 44 display the current question, get the question container, and display each choice
* line 52 creates a div by using the document.createElement (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
* line 54 adds choice,(https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
* line 57 appendChild (https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
* Made one catagory for repeated styles line 104 */
* line line 60 through 81 was created with if and else statements to check if answer was correct and penalize if player choose wrong answer
* line 83 updates the timer
* line 94 ends the quiz

Additional Resources: [Links to supplementary materials]
## Refrences
Youtuber I used to help me in style sheet: https://www.youtube.com/@KevinPowell
* getElement reference
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
* createElement
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
* textContent
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
* appendChild
https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

## Screenshots of Launch of 

### Git push to Github


### Final commit to Github Repository
