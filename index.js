// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

happyHolidays(); // 'Happy holidays!'

function happyHolidaysTo(name) {
  return "Happy holidays, " + `${name}` + "!";
}

happyHolidaysTo("Alex"); // 'Happy holidays, Alex!'

function happyHolidayTo(holiday, name) {
  return "Happy " + `${holiday}` + ", " + `${name}` + "!";
}

happyHolidayTo("Thanksgiving", "Alex");

function holidayCountdown(holiday, days) {
  return "It's " + `${days}` + " days until " + `${holiday}` + "!";
}

holidayCountdown("Chirstmas", 25);
