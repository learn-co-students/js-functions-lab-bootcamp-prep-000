// write your code below!
function happyHolidays(string){
  return "Happy holidays!"
}
happyHolidays();

function happyHolidaysTo(name){
  var name = "you"
  return "Happy holidays," + " " + `${name}` + "!";
}
happyHolidaysTo();

function happyHolidayTo(holiday, name){
  var holiday = "Independence Day";
  var name = "you"
  return "Happy" + " " + `${holiday}` + "," + " " + `${name}` + "!";
}
happyHolidayTo();

function holidayCountdown(holiday, days){
  var holiday = "Mother's Day";
  var days = 20;
  return "It's" + " " + `${days}` + " " + "days until" + " " + `${holiday}` + "!";
}
holidayCountdown();
