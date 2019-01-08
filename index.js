// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}
happyHolidays();

/* IMPORTANT: When using ${template_literals}, always enclose strings
using backticks (``) instead of single ('') or double ("") quotes
for code to work!*/

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo("Jason");

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo("Thanksgiving", "Jason");

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}
holidayCountdown(10, "Thanksgiving");
