function happyHolidays() {
  return "Happy holidays!";
}


function happyHolidaysTo(name) {
  return 'Happy holidays, ${name}!';
}

function happyHolidayTo(holiday, name) {
  return 'Happy ${holiday}, ${name}!';
}

function holidayCountdown(holiday, name) {
  return 'It\'s ${days} days until ${holiday}!';
}


happyHolidayTo("Independence Day", "you");
holidayCountdown("Mother's Day", 20);
