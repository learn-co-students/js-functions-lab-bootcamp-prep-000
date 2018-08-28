// write your code below!
function happyHolidays() {
return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo ('Adrian');

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo ('Easter');
happyHolidayTo ('Adrian');

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown (parseInt('12'));
holidayCountdown ('Easter');