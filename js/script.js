// This file contains the JS functions for index.html

'use strict';
/**
 * This function checks for the inputted age of the user and outputs back what movies they can see
 */
function judge() {
  // Constants
  const R_RATED = 18;
  const PG_THIRTEEN = 13
  const PG_RATED_ALONE = 10
  
  // Variables
  let age = parseInt(document.getElementById('age').value) // Makes variable an integer

  // Output message
  let message = ""

  // Ensures that the user inputted some sort of number
  if (age >= 0) {
    // If the user is at least 18 years old
    if (age >= R_RATED) {
      message = "You can see R-rated movies and below alone!"
      // If the user is at least 13 years old
    } else if (age >= PG_THIRTEEN) {
      message = "You can only watch PG-13 Movies and below alone."
      // If the user is older than 10 years old (To see the movie alone)
    } else if (age >= PG_RATED_ALONE) {
      message = "You can only see a G or PG movie alone"
      // ELSE the user is younger than 10 years old
    } else {
      message = "You cannot see a movie alone! Since you are less than 10 years old."
    }
    // ELSE the user didn't enter anything
  } else {
    message = "Please enter a valid age"
  }
    

  // Outputs what movies the user can see
  document.getElementById('viewable-movies').innerHTML = message
}