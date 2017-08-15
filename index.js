var happyHolidays = function() {
  return "Happy holidays!";
}

var happyHolidaysTo = function(name) {
  return "Happy holidays, " + name + "!";
}

var happyHolidayTo = function(holiday, name) {
  return "Happy " + holiday + ", " + name + "!";
}

var holidayCountdown = function(holiday, days) {
  return "It's " + days + " days until " + holiday + "!";
}


console.log(happyHolidays());
console.log(happyHolidaysTo(Amy));
console.log(happyHolidayTo("Independence Day", "you"));
console.log(holidayCountdown("Halloween", 15));
