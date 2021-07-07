// write your code below!



function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo(name) {
  return 'Happy Holidays, ${name}!';
}

happyHolidaysTo('you');

function happyHolidayTo(holiday,name) {
  return 'Happy ${holiday}, ${name}!';
}

happyHolidayTo('Independece Day', 'you');

function holidayCountdown(days,holiday) {
  return 'It\'s ${days} until ${holiday}';
}

holidayCountdown(20, 'Mother\'s Day');