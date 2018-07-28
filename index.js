// write your code below!

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}"
}

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!!"
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
happyHolidayTo("Independence Day", "you")
holidayCountdown("Mother\'s Day", "20")

console.log("Finished Function Lab.") // NOT DISPLAYED

