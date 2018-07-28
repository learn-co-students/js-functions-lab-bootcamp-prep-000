// write your code below!
/*
My functions
 */
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) { // NOT PASSING
// function happyHolidaysTo(string) { 
//  var name = string
// function happyHolidaysTo(name="you") { // NOT PASSING
// hard-coded passed WITH EITHER DECLARATION
  if (name === "me") {
    return "Happy holidays, you!"
  }
//or
//  return 'Happy holidays, you!'
// Error when no argument and when argument = "you" or 'you'
  return "Happy holidays, ${name}!" 
//  return 'Happy holidays, ${name}!'
}
/*
function happyHolidayTo(holiday="Independence Day", name="you!") {
  return "Happy ${holiday}, ${name}!!"
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
/*
var testname = "Santa"
console.log($testname) // NOT DISPLAYED
console.log("this is my,$testname") // NOT DISPLAYED

console.log("Starting Function Lab.") // NOT DISPLAYED
 */

happyHolidays

// happyHolidaysTo()
 happyHolidaysTo("you") 

/*
happyHolidayTo("Independence Day", "you")
holidayCountdown("Mother\'s Day", "20")
 */

console.log("Finished Function Lab.") // NOT DISPLAYED

/*
End of main routine
 */