// write your code below!
function happyHolidays (){
  return 'Happy holidays!';
}

function happyHolidaysTo (name){
  return `Happy holidays, ${name}!`;
}

function happyCustomHolidayTo (holiday, name){
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown (holiday, daysUntil){
  return `It's ${daysUntil} days until ${holiday}!`;
}

holidayCountdown("Thanksgiving",84);