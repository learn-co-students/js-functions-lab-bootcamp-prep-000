function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(days, holiday){
  return `It's ${days} days until ${holiday}!`;
}

console.log(happyHolidays());
console.log(happyHolidaysTo('Nick'));
console.log(happyHolidayTo('Easter', 'Nick'));
console.log(holidayCountdown(2, 'Easter'));
