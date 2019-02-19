// write your code below!
function happyHolidays(){
  return 'Happy holidays!';
}

function happyHolidaysTo (name){
  return `Happy holidays, ${name}!`;
}

happyHolidaysTo('Bill');

function happyHolidayTo (holiday, name){
  return `Happy ${holiday}, ${name}!`;
}

happyHolidayTo('Christmas', 'Rick');

function holidayCountdown (holiday, days){
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown (70, 'Christmas'); 