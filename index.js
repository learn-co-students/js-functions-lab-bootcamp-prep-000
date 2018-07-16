// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  var name =  name
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday,name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday,days) {
  days = days.toString()
  console.log(days)
  return `It\'s ${days} days until ${holiday}!`
}