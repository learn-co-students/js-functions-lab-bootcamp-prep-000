// function that returns a string
function happyHolidays() {
  return "Happy holidays!";
}
happyHolidays();

// function takes 1 param and returns a template litteral
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
happyHolidaysTo("PJ");

// function takes 2 params and returns a template litteral
function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo("Kwanza", "PJ");

// function takes 2 params and returns a template litteral
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
} 
holidayCountdown("Christmas", "3");