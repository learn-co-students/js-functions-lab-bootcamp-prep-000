var name = "emilie";
var holiday = "summer";
var number = "20";

function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;  
}

console.log (happyHolidays());

console.log (happyHolidaysTo("Chris"));

console.log (happyHolidayTo("Birthday", "Chris"));

console.log (holidayCountdown("Birthday", "3"))


