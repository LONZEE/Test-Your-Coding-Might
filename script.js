const questions = [   // array of questions
    {
        question: "1. Which of the following is not javascript data types?",
        choices: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
        correctAnswer: "All of the mentioned"
    },
    {
        question: "2. What is the basic difference between JavaScript and Java?",
        choices: ["Functions are considered as fields", "Functions are values, and there is no hard distinction between methods and fields", "Variables are specific", "There is no difference"],
        correctAnswer: "Functions are values, and there is no hard distinction between methods and fields"
    },
    {
        question: "3. Arrays in JavaScript are defined by which of the following statements?",
        choices: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", " It is an ordered list of functions"],
        correctAnswer: "It is an ordered list of values"
    },
    {
        question: "4. JavaScript is the programming language of the _____.",
        choices: ["Desktop", "Mobile", "Web", "Server"],
        correctAnswer: "Web"
    },
    {
        question: "5. Which of the following statement(s) is true about the JavaScript?",
        choices: ["It is a scripting language used to make the website interactive", "It is an advanced version of Java for Desktop and Mobile application development", "It is an advanced version of Java for Desktop and Mobile application development", "All of the above"],
        correctAnswer: "It is a scripting language used to make the website interactive"
    },
];
// https://www.sanfoundry.com/1000-javascript-questions-answers/ is where I got these questions from

let currentQuestionIndex = 0;  // index of the current question
let timeLeft = 60;
let timerInterval;
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];  // get high scores from local storage

function startQuiz() {  // start the quiz
    displayQuestion();
    var startButton = document.getElementById("submit-btn");    // get the start button
    startButton.style.display = "none"; // hide the start button
    
    timerInterval = setInterval(updateTimer, 1000); // start the timer

}

function displayQuestion() {   // display the current question, get the question container, and display each choice
    const questionContainer = document.getElementById("question-container");    
    const choicesContainer = document.getElementById("choices-container");

    questionContainer.textContent = questions[currentQuestionIndex].question;
    choicesContainer.innerHTML = "";

    questions[currentQuestionIndex].choices.forEach((choice, index) => {    
        const choiceElement = document.createElement("div");   // create a div for each choice
        choiceElement.classList.add("choice"); // add the choice class to each div
        choiceElement.textContent = `${choice}`;
        choiceElement.setAttribute("data-index", currentQuestionIndex);
        choiceElement.addEventListener("click", () => selectAnswer(index));
        choicesContainer.appendChild(choiceElement);    
    });
}
function selectAnswer(choiceIndex) {    // check if the selected answer is correct
    const selectedChoice = questions[currentQuestionIndex].choices[choiceIndex];
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    questions[currentQuestionIndex].selectedAnswer = selectedChoice;

    if (selectedChoice === correctAnswer) {   // if correct, display next question
        alert("Correct!");
        console.log("Correct!");
    } else {
        alert("Incorrect!");
        console.log("Incorrect!");
        timeLeft -= 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}
function updateTimer() {   // update the timer
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;

    if (timeLeft === 0) {
        endQuiz();
        clearInterval(timerInterval);
    }

    timeLeft--;
}
function endQuiz() {
    clearInterval(timerInterval);

    const timeRemaining = timeLeft > 0 ? timeLeft : 0;
    let highScore = Math.max(...highScores);

    if (timeRemaining > highScore) {
        highScore = timeRemaining;
        highScores.push(highScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }

    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `
        <h1>Quiz Complete!</h1>
        <p>Time Remaining: ${timeRemaining} seconds</p>
        <p>High Scores: ${highScores.join(', ')}</p>
    `;
}


document.getElementById("submit-btn").addEventListener("click", startQuiz);     // add event listener to start button