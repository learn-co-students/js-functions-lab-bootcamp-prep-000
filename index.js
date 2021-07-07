// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
console.log(happyHolidays())

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

console.log(happyHolidaysTo("Jinzi"))

function happyHolidaysTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
console.log(happyHolidaysTo("Thanks Giving","Jinzi"))

function holidayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}!`
}
console.log(holidayCountdown("8", "ThanksGiving"))