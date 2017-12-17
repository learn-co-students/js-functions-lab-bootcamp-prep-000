// write your code below!
function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo(name) {
  return 'Happy holidays, ' + name + '!';
}

function happyHolidayTo(holiday, name) {
  return ('Happy ' + holiday + ', ' + name + '!');
}

function holidayCountdown(holidayName, numOfDaysLeft) {
  return 'It\'s ' + numOfDaysLeft + ' days until ' + holidayName +'!';
}

happyHolidays();
happyHolidaysTo('you');
happyHolidayTo('Independence Day', 'you');
holidayCountdown('Mother\'s Day', 20); 
