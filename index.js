// write your code below!
function happyHolidays() {
  return ("Happy holidays!")
}

function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
happyHolidayTo("Stephen")

function happyHolidayTo(holiday, name) {
  return(`Happy ${holiday}, ${name}!`)
}
happyHolidayTo("New Year", "Stephen")

function holidayCountdown(holiday, days) {
  return(`It's ${days} days until ${holiday}!`)
}
holidayCountdown("20", "Mother's Day")
