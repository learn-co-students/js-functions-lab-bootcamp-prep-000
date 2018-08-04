// write your code below!
function happyHolidays(string){
  if (string === '')
  return 'Happy Holidays!';
}

function happyHolidaysTo(string){
  return 'Happy holidays, ${name}!';
}

function happyHolidaysTo(holiday , name){
  return 'Happy ${holiday}, ${name}!';
}

function holidayCountdown(days , holiday){
  return 'It\'s ${days} days until ${holiday}!'
}