// write your code below!
function happyHolidays() {
  return ("Happy holidays!")
}

function happyHolidaysTo(name) {
     return( 'Happy holidays, ' + name + '!');
}

happyHolidaysTo('you');

function happyHolidayTo(holiday, name) {
  return ('Happy ' + holiday + ',' + ' ' + name + '!');
}

happyHolidayTo('Indpendence Day','you');

function holidayCountdown(holiday, days) {
  return ("It's " + days + " days until " + holiday + "!");
}

holidayCountdown("Mother's Day", "20");
