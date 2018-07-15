// write your code below!
function happyHolidays() {
return ("Happy holidays!")
}
function happyHolidaysTo(name) {
  console.log(`Happy holidays, ${name}!`)

  happyHolidaysTo('you')
}

function happyHolidayTo(holiday,name) {
  console.log(`Happy ${holiday}, ${name}!`)

  happyHolidayTo('Independence Day','you')
}
function holidayCountdown(holiday,days) {
  console.log(`It's ${days} days until ${holiday}!`)

  holidayCountdown("Mother's Day",'20')
}
