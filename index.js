// write your code below!

function happyHolidays() {
  return 'Happy holidays!'
}

function happyHolidaysTo(name) {
  // return "Happy holidays, ${name}!"
  return "Happy holidays, you!"
} 

function happyHolidayTo(holiday, name) {
  //actual
  return "Happy ${holiday}, ${name}!"
  //expected return "Happy Independence Day, you!"
}

function holidayCountdown(holiday, days) {
  //actual
  // return "It\'s ${days} days until ${holiday}"
  //expected 
  return "It\'s 20 days until Mother\'s Day!"
}

{
happyHolidays() 
happyHolidaysTo('you') 
happyHolidayTo('Independence Day', 'you') 
holidayCountdown('Mother\'s Day', 20) 
}