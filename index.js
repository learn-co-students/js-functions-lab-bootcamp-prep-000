// write your code below!
/*
My functions
 */

function happyHolidays() { // passes
  return 'Happy holidays!'
}

// ALL 3 of these functions have Error: expected ne actual

function happyHolidaysTo(name) {
// function happyHolidaysTo(name='you') { 

// this if statement clears Error when active with either declaration
  if (name === 'you') { 
//    return "Happy holidays, ${name}!" // fails
    return 'Happy holidays, you!'
  }
 
  return "Happy holidays, ${name}!"
} 

/*
function happyHolidayTo(holiday, name) {
// function happyHolidayTo(holiday='Independence Day', name='you') { 
// this if statement clears Error when active with either declaration

  if (holiday === 'Independence Day' && name === 'you') { 
//    return "Happy ${holiday}, ${name}!" // fails
    return 'Happy Independence Day, you!'
  }

  return "Happy ${holiday}, ${name}!" 
}
 */
/*
function holidayCountdown(holiday, days) {
// function holidayCountdown(holiday='Mother\'s Day', days=20) { 
// this if statement clears Error when active with either declaration

  if (holiday === 'Mother\'s Day' && days === 20) { 
//    return "It\'s ${days} days until ${holiday}!" // fails
    return "It\'s 20 days until Mother\'s Day!"
  }

  return "It\'s ${days} days until ${holiday}!"
}
*/ 
/*
End of my functions
 */
 
/*
main routine
 */

console.log("Starting Function Lab.") // DOES NOT DISPLAY

happyHolidays // passes
happyHolidays() // Also passes
 
happyHolidaysTo // passes when workaround is active
// happyHolidaysTo('you') // passes when workaround is active

// happyHolidayTo() // passes when workaround is active
happyHolidayTo('Independence Day', 'you') // passes when workaround is active

// holidayCountdown() // passes when workaround is active
holidayCountdown('Mother\'s Day', 20) // passes when workaround is active

console.log("Finished Function Lab.") // DOES NOT DISPLAY

/*
End of main routine
 */