// write your code below!
var name;
function happyHolidays () {
  return "Happy holidays!";
}
function happyHolidaysTo (name) {
  return "Happy holidays, " + name + "!";
}
/* 3. Write a function named `happyHolidayTo`. This function should accept two
parameters, the holiday you want to wish them well for, and the name of the
person you're wishing well. This function should return the string
`"Happy ${holiday}, ${name}"`

4. Write a function named `holidayCountdown`. This function should accept two
parameters, the holiday name and number of days till that holiday. The function
should return the string `"It's ${days} days until ${holiday}!"`
function*/
function happyHolidayTo (holiday, name) {
  return "Happy " + holiday + ", " + name + "!";
}
function holidayCountdown (holiday, days) {
  return "It\'s "+days+" days until "+ holiday +"!";
}
