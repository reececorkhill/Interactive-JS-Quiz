var startButton = document.querySelector("#start");
var questionsDisplay = document.querySelector("#questions");
var currentQuestionIndex = 0;
var timeLeft = 75;
var score = 0;
var quizEnded = false;

const timer = document.getElementById("time");
const firstAnswer = document.getElementById("answer-1");
const secondAnswer = document.getElementById("answer-2");
const thirdAnswer = document.getElementById("answer-3");
const fourthAnswer = document.getElementById("answer-4");
const submitButton = document.getElementById("submit");

firstAnswer.addEventListener("click", checkAnswer);
secondAnswer.addEventListener("click", checkAnswer);
thirdAnswer.addEventListener("click", checkAnswer);
fourthAnswer.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startTheQuiz);
submitButton.addEventListener("click", saveScore);

function startTheQuiz () {
    timerCountdown();
    const startScreenDisplay = document.getElementById("start-screen");
    startScreenDisplay.remove();
    const showQuestions = document.getElementById("questions");
    showQuestions.classList.remove("hide");
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);
}

function timerCountdown () {
    var timeDeduct = setInterval(function() {

        if (quizEnded === true) {
            clearInterval(timeDeduct);
        };

        if (timeLeft > 0) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            clearInterval(timeDeduct);
            endTheQuiz();
        };
    }, 1000);
}

function showQuestionsAndAnswers (time, test) {

    const currentQuestion = document.getElementById("question-title");

    if (currentQuestionIndex+1 > questionsAndAnswers.length) return;

    if (time > 0) {
        currentQuestion.textContent = test.question;
        firstAnswer.textContent = test.answerChoices[0];
        secondAnswer.textContent = test.answerChoices[1];
        thirdAnswer.textContent = test.answerChoices[2];
        fourthAnswer.textContent = test.answerChoices[3];
    };
}

function checkAnswer (event) {
    const feedbackDiv = document.getElementById("feedback");
    feedbackDiv.classList.remove("hide");
    const showFeedback = document.getElementById("feedback-alert");
    var choices = questionsAndAnswers[currentQuestionIndex].answerChoices;
    var correctanswer = questionsAndAnswers[currentQuestionIndex].correctChoice;
    var button = event.target;

    if (parseInt(button.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
        showFeedback.textContent = "Correct!";
        score += 1;
    } else {
        showFeedback.textContent = "Wrong!";
        timeLeft -= 10; 
    };

    if (score >= 20 ) {
        endTheQuiz();
    }

    currentQuestionIndex++;
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);
}

function endTheQuiz () {
    const questionDiv = document.getElementById("questions");
    questionDiv.classList.add("hide");
    const endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");
    const feedbackDiv = document.getElementById("feedback");
    feedbackDiv.classList.add("hide");

    const finalScoreSpan = document.getElementById("final-score");
    finalScoreSpan.textContent = score;

    quizEnded = true;
    setTimeout(function() {
        timer.textContent = "Quiz Finished!";
    }, 700);
}

function saveScore () {
    var initialsInput = document.getElementById("initials");
    var initials = initialsInput.value;
    var initialsAndScore = {initials, score};
    var alreadyExistingScores = JSON.parse(localStorage.getItem("scores"));

    if (!alreadyExistingScores) {
        alreadyExistingScores = [];
    };

    var newScores = [...alreadyExistingScores, initialsAndScore];
    localStorage.setItem("scores", JSON.stringify(newScores));
}