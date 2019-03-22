// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

happyHolidaysTo("Jackie");

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`;
}

happyHolidayTo("Easter", "Jackie");

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}

holidayCountdown(15, "Easter");