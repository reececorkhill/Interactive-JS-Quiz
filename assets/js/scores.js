// function saveScore () {
//     var initialsInput = document.getElementById("initials");
//     var initials = initialsInput.value;
//     console.log({initials, score});
//     localStorage.setItem(initials, score);
// }

var highscoreArea = document.getElementById("highscores");
const clearScoresButton = document.getElementById("clear");
clearScoresButton.addEventListener("click", clearHighscores);

function showScores () {
    var scores = JSON.parse(localStorage.getItem("scores")); 

    if (!scores) {
        highscoreArea.innerHTML =  "";
        const scoreLi = document.createElement("h3");
        scoreLi.textContent = `No Scores`;
        highscoreArea.appendChild(scoreLi);
        return;
    };

    for (var i = 0; i < scores.length; i++) {
        const scoreLi = document.createElement("li");
        scoreLi.textContent = `User: ${scores[i].initials} Score: ${scores[i].score}`;
        highscoreArea.appendChild(scoreLi);
    };    
}

function clearHighscores () {
    localStorage.removeItem("scores");
    showScores();
}

showScores();