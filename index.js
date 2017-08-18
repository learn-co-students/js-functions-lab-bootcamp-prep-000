// write your code below!
function happyHolidays () {
  return "Happy holidays!"
}
happyHolidays()

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
}
happyHolidaysTo("David")

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}! "
}
happyHolidayTo("Christmas", "David")

function holidayCountdown(days, holiday) {
  return "It's $[days] days until ${holiday}!"
}
holidayCountdown("9", "Christmas")
