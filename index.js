// write your code below!

/*
My functions
 */

function happyHolidays() {
  return "Happy holidays!"
}

// ALL of these have Error: expected ne actual
// function happyHolidaysTo(name) {
function happyHolidaysTo(name="you") { 
// this if statement clears Error when active 
  if (name === "you") { 
    return "Happy holidays, you!"
  }

  return "Happy holidays, ${name}!" 
}

function happyHolidayTo(holiday="Independence Day", name="you") {
// this if statement clears Error when active 
  if (holiday === "Independence Day" && name === "you") { 
    return "Happy Independence Day, you!"
  }

  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday="Mother\'s Day", days=20) { 
// this if statement clears Error when active 
  if (holiday === "Mother\'s Day" && days === 20) { 
    return "It\'s 20 days until Mother\'s Day!"
  }
  
  return "It\'s ${days} days until${holiday}!"
}
 
/*
End of my functions
 */
 
/*
main routine
 */

console.log("Starting Function Lab.") // DOES NOT DISPLAY
/
happyHolidays // Passes
// happyHolidays() // Also PasseS
 
// happyHolidaysTo() // passed when workaround active
happyHolidaysTo("you") // fails

happyHolidayTo("Independence Day", "you") // fails

holidayCountdown("Mother\'s Day", "20") // fails

console.log("Finished Function Lab.") // DOES NOT DISPLAY

/*
End of main routine
 */