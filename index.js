// write your code below!

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(string) {
  var name = string
  return "Happy holidays, $name"
}

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday, days) { 
  return "It\'s ${days} days until${holiday}!"
}


var testname = "Santa"
console.log($testname) // NOT DISPLAYED
console.log("this is my,$testname") // NOT DISPLAYED

console.log("Starting Function Lab.") // NOT DISPLAYED

happyHolidays
happyHolidaysTo("you")
happyHolidayTo("Blue Moon Day", "Blues Brothers")
holidayCountdown("Mother\'s Day", "20")

console.log("Finished Function Lab.") // NOT DISPLAYED

