// write your code below!

/*function happyHolidays() {
  return "Happy holidays!"
}

// Having trouble getting ${name} to call 'you'. Directions seem to be different. Initial thoughts were to call the function... happyHolidaysTo('you') outside of brackets
function happyHolidaysTo(name)  {
 
  return 'Happy holidays, you!'
  
}

function happyHolidayTo(holiday, name) {
  return "Happy Independence Day, you!"
}

function holidayCountdown(holiday, days) {
  return "It's 20 days until Mother's Day!"
}
*/

function happyHolidays () {
  return "Happy holidays!";
}

function happyHolidaysTo (name) {
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo (holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown (holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}