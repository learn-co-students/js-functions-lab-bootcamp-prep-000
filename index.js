// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
}

function happyHolidayTo(holiday,name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(days, holiday) {
  var response = "It's ${days} until ${holiday}!"
  return response
}


console.log(holidayCountdown(24, "Christmas"))
