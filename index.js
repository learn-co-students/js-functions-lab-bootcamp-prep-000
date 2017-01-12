// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  var string = "Happy holidays, "
  string += name;
  string += "!";
  return string;
}

function happyHolidayTo(holiday, name) {
  var string = "Happy ";
  string += holiday;
  string += ", ";
  string += name;
  string += "!";
  return string;
}

function holidayCountdown(holiday, days) {
  var string = "It's ";
  string += days;
  string += " days until ";
  string += holiday;
  string += "!";
  return string;
}