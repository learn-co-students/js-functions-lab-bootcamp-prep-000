// write your code below!
function happyHolidays () {
  var greeting = "Happy holidays!"
  return greeting

}

console.log(happyHolidays())

function happyHolidaysTo (name) {
  var greeting = "Happy holidays, " + name +"!"
  return greeting

}

console.log(happyHolidaysTo("Bob"))

function happyHolidayTo (holiday, name) {
  var greeting = "Happy " + holiday + ", " + name + "!"
  return greeting

}

console.log(happyHolidayTo("Passover", "Bob"))

function holidayCountdown(holiday, days) {
  var greeting = "It's " + days + " days until " + holiday + "!"
  return greeting

}

console.log(holidayCountdown("3", "Gvanim"))
