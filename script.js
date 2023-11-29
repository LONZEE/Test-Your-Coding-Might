const questions = [
    {
        question: "1. Which of the following is not javascript data types?",
        choices: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
        correctAnswer: " All of the mentioned"
    },
    {
        question: "2. What is the basic difference between JavaScript and Java?",
        choices: ["Functions are considered as fields", "Functions are values, and there is no hard distinction between methods and fields", "Variables are specific", "There is no difference"],
        correctAnswer: "Functions are values, and there is no hard distinction between methods and fields"
    },
    {
        question: "3. Arrays in JavaScript are defined by which of the following statements?",
        choices: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", " It is an ordered list of functions"],
        correctAnswer: ""
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

function startQuiz() {
    displayQuestion();
    var startButton = document.getElementById("submit-btn");
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);

}

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");    // get the question container 
    const choicesContainer = document.getElementById("choices-container");
}
document.getElementById("submit-btn").addEventListener("click", startQuiz);