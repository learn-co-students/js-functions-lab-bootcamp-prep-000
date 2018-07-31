// write your code below!

function happyHolidays() {
  return 'Happy holidays!'
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
} 
/*
function happyHolidayTo(holiday, name) {
// function happyHolidayTo(holiday='Independence Day', name='you') { 
  if (holiday === 'Independence Day' && name === 'you') { // used to confirm arguments OK since console.log is not working
    // return 'my Happy Independence Day, you!' // 1st test result OK with either declaration
    return "Happy ${holiday}, ${name}!" // 2nd test result FAILS with either declaration
  }
  
  console.log("happyHolidayTo holiday is  ${holiday} and name is ${name}")
  return "Happy ${holiday}, ${name}!" 
}

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
console.log('Starting Function Lab.') // DOES NOT DISPLAY

happyHolidays() 
 

happyHolidaysTo('you') 
/*
// happyHolidayTo() 
happyHolidayTo('Independence Day', 'you') 

// holidayCountdown() 
holidayCountdown('Mother\'s Day', 20) 

console.log('Finished Function Lab.') // DOES NOT DISPLAY

 */