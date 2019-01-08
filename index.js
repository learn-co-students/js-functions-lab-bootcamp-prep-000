// write your code below!
var happyHolidays = function() {
  return("Happy holidays!");
}
happyHolidays();
var happyHolidaysTo = function(name) {
  return`Happy holidays, ${name}!`;
};
happyHolidaysTo('Christina');
var happyHolidayTo = function(holiday, name){
  return`Happy ${holiday}, ${name}!`;
}
happyHolidayTo('Christmas', 'Christina');
var holidayCountdown = function(holiday, days) {
  return`It\'s ${days} days until ${holiday}!`;
}
holidayCountdown('5', 'Christmas');
