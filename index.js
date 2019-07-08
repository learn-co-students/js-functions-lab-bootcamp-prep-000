// write your code below!
/*

1. Write a function named `happyHolidays`. This function should not accept any parameters and should return the string `"Happy holidays!"`.

2. Write a function named `happyHolidaysTo`. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string `` `Happy holidays, ${name}!` ``

3. Write a function named `happyHolidayTo`. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're wishing well. This function should return the string `` `Happy ${holiday}, ${name}!` ``

4. Write a function named `holidayCountdown`. This function should accept two parameters, the holiday name and number of days till that holiday. The function should return the string `` `It's ${days} days until ${holiday}!` ``
*/

var happyHolidays = () => 'Happy holidays!'
var happyHolidaysTo = name => `Happy holidays, ${name}!`
var happyHolidayTo = (holiday, name) => `Happy ${holiday}, ${name}!`
var holidayCountdown = (holiday, days) => `It's ${days} days until ${holiday}!`