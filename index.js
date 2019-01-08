// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days){
  return `It's ${days} ${days > 1? "days":"day"} until ${holiday}!`;
}