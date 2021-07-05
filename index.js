
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("you")

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidaysTo("x","you")

function holidayCountdown(days, holiday) {
  return `It's ${holiday} days until ${days}!`
}

happyHolidaysTo("20","It's Mother's Days")