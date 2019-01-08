// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}
happyHolidays();

function happyHolidaysTo(name) {
  return "Happy holidays, " + name + "!";
}
happyHolidaysTo("you");

function happyHolidayTo(holiday, name) {
  var sent1 = "Happy " + holiday + ", " + name + "!";
  return sent1;
}
happyHolidayTo("Independence Day", "you");

function holidayCountdown(holiday, days) {
  var sent = "It\'s " + days + " days until " + holiday +"!";
  return sent;
}
holidayCountdown("Mother\'s day", 20);
