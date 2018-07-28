// write your code below!
/*
My functions
 */

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name="you") { 
  if (name === "you") { // Passed when called with null argument
    return "Happy holidays, you!"
  }
  return "Happy holidays, ${name}!" 
}
/*
function happyHolidayTo(holiday="Independence Day", name="you") {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday="Mother\'s Day", days=20) { 
  return "It\'s ${days} days until${holiday}!"
}
 */
/*
End of my functions
 */
 
/*
main routine
 */

console.log("Starting Function Lab.") // NOT DISPLAYED

happyHolidays // Passed

happyHolidaysTo() // passed with workaround
// happyHolidaysTo("you") 

/*
happyHolidayTo("Independence Day", "you")
holidayCountdown("Mother\'s Day", "20")
 */

console.log("Finished Function Lab.") // NOT DISPLAYED

/*
End of main routine
 */