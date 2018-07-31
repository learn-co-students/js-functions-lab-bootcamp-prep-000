// write your code below!

function happyHolidays() {
  return 'Happy holidays!'
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
} 

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!" 
}
/*
function holidayCountdown(holiday, days) {
// function holidayCountdown(holiday='Mother\'s Day', days=20) { 
  if (holiday === 'Mother\'s Day' && days === 20) { // used to confirm parameters are OK since console.log is not working
    // return "my It\'s 20 days until Mother\'s Day!" // 1st test result OK with either declaration
    return "It\'s ${days} days until ${holiday}!" // 2nd test result FAILS with either declaration
  }

  console.log("holidayCountdown holiday is ${holiday} and days is ${days}")
  return "It\'s ${days} days until ${holiday}
}
 */

happyHolidays() 
happyHolidaysTo('you') 
happyHolidayTo('Independence Day', 'you') 
/*
holidayCountdown('Mother\'s Day', 20) 
 */