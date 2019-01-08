// write your code below!
var string = happyHolidays();
var name = "Joe";
var holiday = "July4th"
var days = 4;
console.log(name);

happyHolidaysTo(name);
happyHolidaysTo(name, holiday);
holidayCountdown(days);


function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return 'Happy holidays, ' + name + '!';
}

function happyHolidayTo(holiday, name){
  return 'Happy ' + holiday + ', ' + name +'!';
}

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`;
}
