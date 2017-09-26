var holiday = Halloween
var name = Susan
var days = "30"

function happyHolidays() {
  console.log("Happy Holidays!")
  return "Happy Holidays!"
}
function happyHolidaysTo("name") {
  return `Happy Holidays, ${name}!`
}
function happyHolidayTo("holiday", "name") {
  console.log("Happy Halloween, Susan!")
  return `Happy ${holiday}, ${name}`
}
function holidayCountdown("holiday", "days") {
  return `It's ${days} days until ${holiday}!`
}
