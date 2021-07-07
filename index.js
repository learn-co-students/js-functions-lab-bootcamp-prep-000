function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}

console.log(happyHolidays());
console.log(happyHolidaysTo('you'));
console.log(happyHolidayTo("you", "Independence Day"));
console.log(holidayCountdown("Mother's Day", 20));