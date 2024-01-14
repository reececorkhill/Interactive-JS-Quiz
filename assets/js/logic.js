var startButton = document.querySelector("#start");
var questionsDisplay = document.querySelector("#questions");
var currentQuestionIndex = 0;
var timeLeft = 75;
var score = 0;

const firstAnswer = document.getElementById("answer-1");
const secondAnswer = document.getElementById("answer-2");
const thirdAnswer = document.getElementById("answer-3");
const fourthAnswer = document.getElementById("answer-4");

firstAnswer.addEventListener("click", checkAnswer);
secondAnswer.addEventListener("click", checkAnswer);
thirdAnswer.addEventListener("click", checkAnswer);
fourthAnswer.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startTheQuiz);

function startTheQuiz() {
    timerCountdown();
    // console.log("Button working!")
    const startScreenDisplay = document.getElementById("start-screen");
    startScreenDisplay.remove();
    // console.log("Start-Screen block removed!")
    const showQuestions = document.getElementById("questions");
    showQuestions.classList.remove("hide");
    // console.log("Questions are now showing?")
    // console.log("Has timer started counting down?")
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);
        // showQuestionsAndAnswers (questionsAndAnswers[currentQuestionIndex]);
        // displayAnswers(questionsAndAnswers[currentQuestionIndex]);
        // displayCorrectAnswer(questionsAndAnswers[currentQuestionIndex]);
        // currentQuestionIndex++;
    // showQuestionsAndAnswers (questionsAndAnswers[currentQuestionIndex]);
    // displayAnswers(questionsAndAnswers[currentQuestionIndex]);
    // displayCorrectAnswer(questionsAndAnswers[currentQuestionIndex]);
}

function timerCountdown() {
    const timer = document.getElementById("time");
    // console.log(timer)    
    var timeDeduct = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timer.textContent = "Quiz Finished!";
            clearInterval(timeDeduct);
            console.log("Time is up - switch to end-screen!") 
        }
        // console.log(timeLeft);
    }, 1000);
}

function showQuestionsAndAnswers (time, test) {
    // console.log(test.question);
    if (currentQuestionIndex+1 > questionsAndAnswers.length) return;
    const currentQuestion = document.getElementById("question-title");
    const firstAnswer = document.getElementById("answer-1");
    const secondAnswer = document.getElementById("answer-2");
    const thirdAnswer = document.getElementById("answer-3");
    const fourthAnswer = document.getElementById("answer-4");

    if (time > 0) {
        currentQuestion.textContent = test.question;
        // console.log(test.answerChoices)
        firstAnswer.textContent = test.answerChoices[0];
        secondAnswer.textContent = test.answerChoices[1];
        thirdAnswer.textContent = test.answerChoices[2];
        fourthAnswer.textContent = test.answerChoices[3];
    };
}

function checkAnswer(event) {
    var choices = questionsAndAnswers[currentQuestionIndex].answerChoices;
    var correctanswer = questionsAndAnswers[currentQuestionIndex].correctChoice;
    var button = event.target;
    // console.log(currentQuestionIndex);
    console.log(choices);
    console.log(correctanswer);
    console.log("====")

    if (parseInt(button.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
        console.log("Correct Answer!");
        console.log("Score: " + score);
        score += 1;
        console.log("Score: " + score); 
    } else {
        console.log("Wrong!");
        timeLeft -= 10; 
    };
    currentQuestionIndex++;
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);
}

function displayAnswers(test) {
    console.log(test.answerChoices);
}

function displayCorrectAnswer(test) {
    console.log(test.correctChoice);
}