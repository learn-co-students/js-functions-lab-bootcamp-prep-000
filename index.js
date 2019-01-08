// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

var name = "you"
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
//  return "Happy holidays, you!"
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
//  return "Happy Independence Day, you!";
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
//  return "It's 20 days until Mother's Day!";
}

// happyHolidays()
happyHolidaysTo("you")
// happyHolidayTo("Christmas", "Bruce")
// holidayCountdown(356, "Christmas")
