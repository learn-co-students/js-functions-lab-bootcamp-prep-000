// write your code below!

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  var thing = name;
  var newstring = `Happy holidays, ${thing}!`
  return newstring
}

function happyHolidayTo(holiday, name) {
  var newstring = `Happy ${holiday}, ${name}!`
  return newstring
}

function holidayCountdown(holiday, days) {
  var stuff = `It's ${days} days until ${holiday}!`
  return stuff
}
