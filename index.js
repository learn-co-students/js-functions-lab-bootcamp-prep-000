global.expect = require('expect');
function name() {
  return ('you')
}

function happyHolidays() {
  return ("Happy holidays!");

}
var name =("zarah");
function happyHolidaysTo(name) {
  return ('Happy holidays, ${you!}');
}
var holiday = "halloween";
function happyHolidayTo(holiday,name) {
  return ("Happy ${holiday}, ${you}!");

}
var days = 20
function holidayCountdown(days,holiday) {
  return ("It's ${days} days until ${holiday}");

}
