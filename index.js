/**
 * happyHolidays function returns the string "Happy holidays!"
 */
function happyHolidays() {
  return "Happy holidays!";
}

/**
 * happyHolidaysTo function returns the string "Happy holidays, 'name'"
 */
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

/**
 * happyHolidayTo function returns the string "Happy 'holiday', 'name'!"
 */
function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

/**
 * holidayCountdown function returns a string with the countdown until a named holiday
 **/
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}
