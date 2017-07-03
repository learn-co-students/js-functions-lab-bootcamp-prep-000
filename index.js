
// Write a function named `happyHolidays`. This function should not accept any
// parameters and should return the string `"Happy holidays!"`.

function happyHolidays() {
  return ("Happy holidays!")
}

// 2. Write a function named `happyHolidaysTo`. This function should accept a
// parameter of the name of the person you want to wish happy holidays, and return
// the string `"Happy Holidays, ${name}"`

function happyHolidaysTo(string) {
  var happyName = ("Happy holidays, " + string + "!")
  return happyName
}

// 3. Write a function named `happyHolidayTo`. This function should accept two
// parameters, the holiday you want to wish them well for, and the name of the
// person you're wishing well. This function should return the string
// `"Happy ${holiday}, ${name}"`


function happyHolidayTo(holiday, name) {
  var anyHolidayNName = ("Happy " + holiday + ", " + name + "!")
  return anyHolidayNName
}

// 4. Write a function named `holidayCountdown`. This function should accept two
// parameters, the holiday name and number of days till that holiday. The function
// should return the string `"It's ${days} days until ${holiday}!"`

function holidayCountdown(holiday, daysLeft) {
  var remainingDays = ("It's " + daysLeft + " days until " + holiday + "!")
  return remainingDays
}
