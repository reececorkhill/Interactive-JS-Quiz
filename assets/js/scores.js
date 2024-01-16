var highscoreArea = document.getElementById("highscores");                                  // Targeting the highscores ordered list element.
const clearScoresButton = document.getElementById("clear");                                 // Targeting the clear button.
clearScoresButton.addEventListener("click", clearHighscores);                               // Listening for a click of the 'clear highscores' button. 

// Defining a function which will show the highscores. 
function showScores () {
    var scores = JSON.parse(localStorage.getItem("scores"));                                // Retrieving from local storage using the key "scores" and parses.

    if (!scores) {                                                                          // If there are no scores;
        highscoreArea.innerHTML =  "";                                                      // Clear existing content in the highscores ordered list element.
        const scoreLi = document.createElement("h3");                                       // Creating a variable 'scoreLi' to create a new h3 element and;
        scoreLi.textContent = `No Scores`;                                                  // and display a message saying 'No Scores' if there are no scores (line: 9).
        highscoreArea.appendChild(scoreLi);                                                 // Displays the above to the highscores ordered list element.
        return;                                                                             // Returns from the function.
    };

    for (var i = 0; i < scores.length; i++) {                                               // Iterates through scores and displays each in a li.
        const scoreLi = document.createElement("li");                                       // Creating a variable 'scoreLi' to create a new h3 element and; 
        scoreLi.textContent = `User: ${scores[i].initials} Score: ${scores[i].score}`;      // Sets the text content of the li to display the user's initials and score.
        highscoreArea.appendChild(scoreLi);                                                 // Appends the 'scoreLi' element to the highscores ordered list element.
    };    
}

// Defining a function which will clear the highscores.
function clearHighscores () {
    localStorage.removeItem("scores");                                                      // Remove from local storage anything with the key 'scores'.
    showScores();                                                                           // Calls the showScores function.
}

showScores();                                                                               // Calls the showScores function.