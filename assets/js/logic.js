var startButton = document.querySelector("#start");
var questionsDisplay = document.querySelector("#questions");
var currentQuestionIndex = 0;
var timeLeft = 75;

startButton.addEventListener("click", function() {
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
    checkAnswer(questionsAndAnswers[currentQuestionIndex].answerChoices, questionsAndAnswers[currentQuestionIndex].correctChoice);
});

function timerCountdown() {
    const timer = document.getElementById("time");
    // console.log(timer)

    var timeLeft = 75;

    var timeDeduct = setInterval(function() {
        if (timeLeft > 0) {
            timer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timer.textContent = "Quiz Finished!";
            clearInterval(timeDeduct);
            console.log("Time is up - switch to end-screen!") 
        }
    }, 1000);
}

function showQuestionsAndAnswers (time, test) {
    console.log(test.question);

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
      } else {
        console.log("Test Log")
    };
}

function checkAnswer(choices, correctanswer) {
    const firstAnswer = document.getElementById("answer-1");
    const secondAnswer = document.getElementById("answer-2");
    const thirdAnswer = document.getElementById("answer-3");
    const fourthAnswer = document.getElementById("answer-4");

    console.log(choices);
    console.log(correctanswer);
    firstAnswer.addEventListener("click", function(){
        if (parseInt(firstAnswer.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
            console.log("Correct Answer!");
        } else {
            console.log("Wrong!");
            penalty = timeLeft - 10;
        }  
    });

    secondAnswer.addEventListener("click", function(){
        if (parseInt(secondAnswer.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
            console.log("Correct Answer!");
        } else {
            console.log("Wrong!");
        }  
    });

    thirdAnswer.addEventListener("click", function(){
        if (parseInt(thirdAnswer.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
            console.log("Correct Answer!");
        } else {
            console.log("Wrong!");
        }  
    });

    fourthAnswer.addEventListener("click", function(){
        if (parseInt(fourthAnswer.getAttribute("data-index")) === choices.indexOf(correctanswer)) {
            console.log("Correct Answer!");
        } else {
            console.log("Wrong!");
        }  
    });
}

function displayAnswers(test) {
    console.log(test.answerChoices);
}

function displayCorrectAnswer(test) {
    console.log(test.correctChoice);
}