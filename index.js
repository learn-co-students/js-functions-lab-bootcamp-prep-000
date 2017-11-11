// write your code below!
function happyHolidays() {
  var greeting = "Happy holidays!";
  return greeting;
}

function happyHolidaysTo (name){
  name = 'you';
  return `Happy holidays, ${name}!`;

}

function happyHolidayTo(holiday, name){
  holiday = 'Independence Day';
  name = 'you';
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(days, holiday){
  days = 20;
  holiday = "Mother's Day";
  return `It's ${days} days until ${holiday}!`;
}
