// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}
happyHolidays("Happy holidays!");

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo('you');

function happyHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`;
}
happyHolidaysTo("Independence day", "Elaina");

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown("Mother's day", 20);