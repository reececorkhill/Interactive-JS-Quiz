var startButton = document.querySelector("#start");                 // Setting a query selector for the start button.
var questionsDisplay = document.querySelector("#questions");        // Setting a query selector for the questions div.
var currentQuestionIndex = 0;                                       // Setting the current question index to 0.
var timeLeft = 75;                                                  // Setting default time left as 75 (seconds).
var score = 0;                                                      // Setting default score as 0.
var quizEnded = false;                                              // Setting quiz ended as false by default.

const timer = document.getElementById("time");                      // Targeting the time element which we will override.
const firstAnswer = document.getElementById("answer-1");            // Targeting the 1st answer button. 
const secondAnswer = document.getElementById("answer-2");           // Targeting the 2nd answer button. 
const thirdAnswer = document.getElementById("answer-3");            // Targeting the 3rd answer button. 
const fourthAnswer = document.getElementById("answer-4");           // Targeting the 4th answer button. 
const submitButton = document.getElementById("submit");             // Targeting the submit button. 

firstAnswer.addEventListener("click", checkAnswer);                 // Listening for a click of the 1st answer button and calling the checkAnswer function.
secondAnswer.addEventListener("click", checkAnswer);                // Listening for a click of the 2nd answer button and calling the checkAnswer function.
thirdAnswer.addEventListener("click", checkAnswer);                 // Listening for a click of the 3rd answer button and calling the checkAnswer function.
fourthAnswer.addEventListener("click", checkAnswer);                // Listening for a click of the 4th answer button and calling the checkAnswer function.
startButton.addEventListener("click", startTheQuiz);                // Listening for a click of the start button and calling the startTheQuiz function.
submitButton.addEventListener("click", saveScore);                  // Listening for a click of the submit button and calling the saveScore function.

// Defining a function which will start the quiz.
function startTheQuiz () {
    timerCountdown();                                                               // Calling the timerCoundown funciton to start the timer.
    const startScreenDisplay = document.getElementById("start-screen");             // Targeting the start-screen.
    startScreenDisplay.remove();                                                    // Removing the start-screen from view.
    const showQuestions = document.getElementById("questions");                     // Targeting the questions div.
    showQuestions.classList.remove("hide");                                         // Removing the class 'hide' from the questions div to show the questions.
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);  // Calling the showQuestionsAndAnswers function and passing in variables.
}

// Defining a function which will countdown to 0 in 1 second increments.
function timerCountdown () {
    var timeDeduct = setInterval(function() {                                       // Setting a timeDeduct variable as an anonymous function.

        if (quizEnded === true) {                                                   // If the quiz has ended:
            clearInterval(timeDeduct);                                              // clear the interval so countdown stops.
        };

        if (timeLeft > 0) {                                                         // If the user has time left (time is greater than 0):
            timer.textContent = timeLeft + ' seconds remaining';                    // set the timer to display the current number followed by 'seconds remaining' and;
            timeLeft--;                                                             // reduce the number on the timer by 1 (comment follows at line: 47) * ---->
        } else {                                                                    // Else (if the timer is not greater than 0):
            clearInterval(timeDeduct);                                              // clear the interval so countdown stops and;
            endTheQuiz();                                                           // call the endTheQuiz function to end the quiz.
        };
    }, 1000);                                                                       // Reduce time by 1 second in 1 second intervals (1000 = milliseconds). * <----
}

// Defining a function which will show the questions and answers.
function showQuestionsAndAnswers (time, currentQuestionData) {

    const currentQuestionH2 = document.getElementById("question-title");            // Targeting the questions title element.

    if (currentQuestionIndex+1 > questionsAndAnswers.length) return;                // 1-line if statement to check if the index of the current question + 1 is greater than the total number of questions and if true, returns from the function.

    if (time > 0) {                                                                 // If the time is greater than 0;
        currentQuestionH2.textContent = currentQuestionData.question;               // sets the currentQuestionH2 textContent to current question from the questionsAndAnswers array and;
        firstAnswer.textContent = currentQuestionData.answerChoices[0];             // sets the firstAnswer button textContent to current questions 1st answer option and;
        secondAnswer.textContent = currentQuestionData.answerChoices[1];            // sets the secondAnswer button textContent to current questions 2nd answer option and;
        thirdAnswer.textContent = currentQuestionData.answerChoices[2];             // sets the thirdAnswer button textContent to current questions 3rd answer option and;
        fourthAnswer.textContent = currentQuestionData.answerChoices[3];            // sets the fourthAnswer button textContent to current questions 4th answer option.
    };
}

// Defining a function which will check if the answer the user chooses is correct or incorrect.
function checkAnswer (event) {
    const feedbackDiv = document.getElementById("feedback");                        // Targeting the feedback div.
    feedbackDiv.classList.remove("hide");                                           // Removing the class 'hide' from the feedback div to show the feedback (Correct or Incorrect). 
    const showFeedback = document.getElementById("feedback-alert");                 // Targeting the feedback alert h3 element.
    var choices = questionsAndAnswers[currentQuestionIndex].answerChoices;          // Setting a choices variable.      
    var correctanswer = questionsAndAnswers[currentQuestionIndex].correctChoice;    // Setting a correctanswer variable.
    var button = event.target;                                                      // Retrieves what triggered the event - a button click in this case (line: 15-18).

    if (parseInt(button.getAttribute("data-index")) === choices.indexOf(correctanswer)) { // If the index of the clicked button matches the index of the correct answer in the choices array:
        showFeedback.textContent = "Correct!";                                            // Display "Correct!" in the feedback-alert h3.
        score += 1;                                                                       // Add 1 to the score.
    } else {                                                                              // Else (if the index of the clicked button does not match the index of the correct answer in the choices array):
        showFeedback.textContent = "Wrong!";                                              // Display "Correct!" in the feedback-alert h3.
        timeLeft -= 10;                                                                   // Deduct 10 seconds from the timeLeft.
    };

    if (score >= 20 ) {                                                                   // If the user score reaches 20;
        endTheQuiz();                                                                     // end the quiz by calling the endTheQuiz function.
    }

    currentQuestionIndex++;                                                               // Increase the current question index by 1.
    showQuestionsAndAnswers (timeLeft, questionsAndAnswers[currentQuestionIndex]);        // Call the showQuestionsAndAnswers function and passing in time and the index of the questionsAndAnswers array.
}

// Defining a function which will end the quiz.
function endTheQuiz () {
    const questionDiv = document.getElementById("questions");                             // Targeting the questions div and;
    questionDiv.classList.add("hide");                                                    // adding the class 'hide' to hide the questions div.
    const endScreen = document.getElementById("end-screen");                              // Targeting the end-screen div and:
    endScreen.classList.remove("hide");                                                   // removing the class 'hide' to show the end screen.
    const feedbackDiv = document.getElementById("feedback");                              // Targeting the feedback div and;
    feedbackDiv.classList.add("hide");                                                    // adding the class 'hide' to hide the feedback div.

    const finalScoreSpan = document.getElementById("final-score");                        // Targeting the final-score span element and;
    finalScoreSpan.textContent = score;                                                   // setting the text content of the final score span to the score the user reached.

    quizEnded = true;                                                                     // Setting the quizEnded variable to true as the quiz has ended.
    setTimeout(function() {                                                               // Setting a timeout anonymous function; 
        timer.textContent = "Quiz Finished!";                                             // to show 'Quiz Finished!' in the timer;
    }, 700);                                                                              // delaying this from running by 700 milliseconds.
}

// Defining a function which will save the users score in local storage.
function saveScore () {
    var initialsInput = document.getElementById("initials");                              // Targeting the initials input box and;
    var initials = initialsInput.value;                                                   // setting the inititals variable to the input box value.
    var initialsAndScore = {initials, score};                                             // Creating an object with properties 'initials' and 'score'.
    var alreadyExistingScores = JSON.parse(localStorage.getItem("scores"));               // Retrieve the value associated with the key "scores" from the local storage and; 
                                                                                          // parses it as JSON, and stores it in the 'alreadyExistingScores' variable.

    if (!alreadyExistingScores) {                                                         // Check if 'alreadyExistingScores' is falsy (null, undefined, or an empty array).
        alreadyExistingScores = [];                                                       // If 'alreadyExistingScores' is falsy, initialize it as an empty array.
    };

    var newScores = [...alreadyExistingScores, initialsAndScore];                         // Creates 'newScores' array by spreading the elements of 'alreadyExistingScores' and adding 'initialsAndScore' to the end.
    localStorage.setItem("scores", JSON.stringify(newScores));                            // Converts 'newScores' to a string and stores it in local storage with the key "scores".
}