function happyHolidays(){
  return "Happy holidays!"
}

var name = "you"

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

happyHolidayTo("you")

function happyHolidayTo (holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo("Independence Day", "you")

function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`
}

holidayCountdown("Mother\'s Day", "20")