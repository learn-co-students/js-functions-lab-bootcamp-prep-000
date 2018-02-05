// write your code below!

function happyHolidays() {
  return (`Happy holidays!`);
}

function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`);
}
happyHolidaysTo("Vincent");

function happyHolidayTo(holiday, name) {
  return (`Happy ${holiday}, ${name}!`);
}
happyHolidayTo("Birthday", "Vincent");

function holidayCountdown(holiday, days) {
  return (`It\'s ${days} days until ${holiday}!`);
}
holidayCountdown("20", "Mother\'s");