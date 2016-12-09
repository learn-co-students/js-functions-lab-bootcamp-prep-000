// Says "Happy holidays!"
function happyHolidays() {
  return "Happy holidays!"
}

// Says "Happy Holidays, (PERSONS NAME)"
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

// Says "Happy (HOLIDAY), (NAME)""
function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

/* Says holiday name and number of days
until that holiday
*/

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
