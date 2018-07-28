// write your code below!
"use strict"
/*
My functions
 */

function happyHolidays() {
  return "Happy holidays!"
}

// ALL of these have Error: expected ne actual
function happyHolidaysTo(name) {
// function happyHolidaysTo(name="you") { 
/* clears Error when active 
  if (name === "you") { // Passed when argument is null or any string or number
    return "Happy holidays, you!"
  }
*/ 
  return "Happy holidays, ${name}!" 
}

function happyHolidayTo(holiday="Independence Day", name="you") {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday="Mother\'s Day", days="20") { 
  return "It\'s ${days} days until${holiday}!"
}
 
/*
End of my functions
 */
 
/*
main routine
 */

console.log("Starting Function Lab.") // DOES NOT DISPLAY
/* NOTE: passing and failing OCCUR VIA learn WITHOUT CALLING THE FUNCTIONS
happyHolidays // Passes
// happyHolidays() // Also PasseS
 
// happyHolidaysTo() // passed with workaround active
happyHolidaysTo("you") // fails

happyHolidayTo("Independence Day", "you") // fails

holidayCountdown("Mother\'s Day", "20") // fails
 */

console.log("Finished Function Lab.") // DOES NOT DISPLAY

/*
End of main routine
 */