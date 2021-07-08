// write your code below!
function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo (name) {
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo('Alex');

function happyHolidayTo (holiday,name) {
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo('Easter','Alex')

function holidayCountdown(holiday,days) {
  return `It\'s ${days} days until ${holiday}!`;
}

holidayCountdown('Easter',10)
