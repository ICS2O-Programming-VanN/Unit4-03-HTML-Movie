// This file contains the JS functions for index.html

'use strict';
/**
 * This function 
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

  // 
  if (age >= 0) {
    if (age >= R_RATED) {
      message = "You can see R-rated movies and below alone!"
      // 
    } else if (age >= PG_THIRTEEN) {
      message = "You can only watch PG-13 Movies and below alone."
      // 
    } else if (age >= G_RATED_ALONE) {
      message = "You can only see a G or PG movie alone"
    } else if (age > 0) {
      message = "You cannot see a movie alone! You child..."
    } else {
      message = "Fraudster...You're less than 1 years old? Right...How are you even on here?"
    }
  } else {
    message = "Not inputting your age? You must think you're clever..."
  }
    

  // 
  document.getElementById('viewable-movies').innerHTML = message
}