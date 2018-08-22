// write your code below!
function happyHolidays(string) {
   return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holidays, name) {
  return `Happy ${holidays}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("Independence Day", "you")
holidayCountdown("Mothers Day", 20)