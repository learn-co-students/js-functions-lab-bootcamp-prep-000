// write your code below!
function happyHolidays () {
  return ("Happy holidays!")
}

console.log(happyHolidays())

function happyHolidaysTo(firstName) {
  return `Happy holidays, ${firstName}!`
}

console.log(happyHolidaysTo("Brooke"))

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

console.log(happyHolidayTo("Hannukah", "George"))

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

console.log(holidayCountdown("my birthday", "4"))
