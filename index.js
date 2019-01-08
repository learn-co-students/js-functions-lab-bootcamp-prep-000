// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!'
}
function happyHolidayTo(holiday, name) {
  return 'Happy ${holiday}, ${name}!'
}
function holidayCountdown(days, holidays) {
  return 'It\'s ${days} days until ${holidays}!'
}

happyHolidays()
happyHolidaysTo('you')
happyHolidayTo('Independence Day', 'you')
holidayCountdown("Mother's Day", 20)
