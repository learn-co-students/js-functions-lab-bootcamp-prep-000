// write your code below!
function happyHolidays() {
  return "Happy Holidays!"
}

function happyHolidaysTo(name) {
  return `Happy Holidays, ${name}!`
}

happyHolidaysTo("Otti")

function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidaysTo("Easter", "Otti")

function holidayCoutndown(days, holidays) {
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown("10", "Summer")
