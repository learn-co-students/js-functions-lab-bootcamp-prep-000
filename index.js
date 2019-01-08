// write your code below!
var name = "Susan"
var holiday = "holiday"
var days = 20

module.exports = {name, holiday, days}

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  var message = "Happy holidays, ${name}!"
  console.log(message)
}

function happyHolidayTo(name, holiday) {
  var message = "Happy ${holiday}, ${name}!"
  console.log(message)
}

function holidayCountdown() {
  module.exports = {holiday, days}
  var message = "It's ${days} days until ${holiday}!"
  console.log(message)
}
