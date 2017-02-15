function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return happyHolidayTo("holidays", name);
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`;
}