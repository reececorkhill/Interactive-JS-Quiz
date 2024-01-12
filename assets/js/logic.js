var startButton = document.querySelector("#start");
var questionsDisplay = document.querySelector("#questions");

startButton.addEventListener("click", function() {
    timerCountdown();
    console.log("Button working!")
    const startScreenDisplay = document.getElementById("start-screen");
    startScreenDisplay.remove();
    console.log("Start-Screen block removed!")
    const showQuestions = document.getElementById("questions");
    showQuestions.classList.remove("hide");
    console.log("Questions are now showing?")
    console.log("Has timer started counting down?")
});

function timerCountdown() {
    const timer = document.getElementById("time");
    console.log(timer)

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