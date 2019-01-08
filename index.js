// write your code below!
function happyHolidays() {
  return ("Happy holidays!");
    happyHolidays() // "Happy holidays!"
}

function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`);
    happyHolidaysTo('you') // "Happy holidays, you!"
}

function happyHolidayTo(holiday, name) {
  return (`Happy ${holiday}, ${name}!`);
    happyHolidayTo("Independence Day", "you") // "Happy Independence Day, you!"
}

function holidayCountdown(holiday, days) {
  return (`It\'s ${days} days until ${holiday}!`);
    holidayCountdown("Mother's Day", 20) // "It's 20 days until Mother's Day!"
}
