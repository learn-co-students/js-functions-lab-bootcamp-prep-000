// write your code below!
/*


function happyHolidays() { 
  return 'Happy holidays!'
}

// ALL 3 of these functions have Error: expected ne actual

// function happyHolidaysTo(name) {
function happyHolidaysTo(myname) { // fails
// function happyHolidaysTo(name='you') {
var name = myname // fails when argument is not 'you'
  if (name === 'you') { // used to confirm argument OK since console.log is not working
    // return 'my Happy holidays, you!' // 1st test result OK with either declaration
    // return "Happy holidays, ${name}!" // 2nd test result FAILS with either declaration
    // return "Happy holidays, ${myname}!" // 3rd test fails
    return "Happy holidays, everyone!" // result  when passed value was "me"
  }
  
  console.log("happyHolidaysTo name is ${name}")
  // return "Happy holidays, ${name}!"
  // return "Happy holidays, ${myname}!" // fails
  return "Happy holidays, everyone!" 
} 

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

console.log('Starting Function Lab.') // DOES NOT DISPLAY

happyHolidays 
happyHolidays() 
 
// happyHolidaysTo()
// happyHolidaysTo('you') 
happyHolidaysTo("me") 

// happyHolidayTo() 
happyHolidayTo('Independence Day', 'you') 

// holidayCountdown() 
holidayCountdown('Mother\'s Day', 20) 

console.log('Finished Function Lab.') // DOES NOT DISPLAY

 */