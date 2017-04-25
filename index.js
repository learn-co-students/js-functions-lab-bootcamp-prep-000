
function happyHolidays() {
  return "Happy holidays!"
}

happyHolidays()

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

happyHolidayTo("You")

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo("Hannukah", "Alberta")

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown("Hannukah", "20")
