// write your code below!
function happyHolidays() {
  return ("Happy holidays!")
}

var message

function happyHolidaysTo(name) {
  message = `Happy holidays, ${name}!`
  return (message)
}

function happyHolidayTo(holiday,name) {
  message =`Happy ${holiday}, ${name}!`
  return (message)
}

function holidayCountdown(holiday, days) {
 message =`It\'s ${days} days until ${holiday}!`
 return (message) 
}