// write your code below!

/* Write a function named happyHolidays. This function should not accept any
parameters and should return the string "Happy holidays!" */
function happyHolidays() {
  return "Happy holidays!"
}

/* Write a function named happyHolidaysTo. This function should accept a
parameter of the name of the person you want to wish happy holidays, and return
the string `Happy holidays, ${name}!` */
function happyHolidaysTo(name) {
  var $name = "you";
  return `Happy holidays, ${name}!`
}

/* Write a function named happyHolidayTo. This function should accept two
parameters, the holiday you want to wish them well for, and the name of the
person you're wishing well. This function should return the string
`Happy ${holiday}, ${name}!` */
function happyHolidayTo(holiday, name) {
  var $holiday = "Independence Day";
  var $name = "you";
  return `Happy ${holiday}, ${name}!`
}

/* Write a function named holidayCountdown. This function should accept two
parameters, the holiday name and number of days till that holiday. The function
should return the string `It's ${days} days until ${holiday}!` */
function holidayCountdown(holiday, days) {
  var $days = 20;
  var $holiday = "Mother's Day";
  return `It\'s ${days} days until ${holiday}!`
}
