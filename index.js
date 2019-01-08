/*
2. Write a function named `happyHolidaysTo`. This function should accept a
parameter of the name of the person you want to wish happy holidays, and return
the string `"Happy Holidays, ${name}"`

3. Write a function named `happyHolidayTo`. This function should accept two
parameters, the holiday you want to wish them well for, and the name of the
person you're wishing well. This function should return the string
`"Happy ${holiday}, ${name}"`

4. Write a function named `holidayCountdown`. This function should accept two
parameters, the holiday name and number of days till that holiday. The function
should return the string `"It's ${days} days until ${holiday}!"`
*/

function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
