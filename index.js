// write your code below!
// Function that does not accept parameters and returns "Happy holidays!"
function happyHolidays(){
  return "Happy holidays!"
}
// Function that accepts a parameter of name and returns Happy holidays to that name.
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
// Function that accepts a parameter of holiday and name then wishes that name that happy holiday.
function happyHolidayTo(holiday,name){
  return "Happy " + holiday + ", " + name + "!"
}
// Function holidayCountdown that accepts two arguments and returns the days left until a certain holiday.
function holidayCountdown(holiday,days){
  return `It\'s ${days} days until ${holiday}!`
}
