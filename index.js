function happyHolidays() {
  return 'Happy holidays!'
}

function happyHolidaysTo(name) {
  var returnStr = `Happy holidays, ${name}!`
  return returnStr
}

function happyHolidayTo(holiday, name) {
  var returnStr = `Happy ${holiday}, ${name}!`
  return returnStr
}

function holidayCountdown(holiday, days) {
  var returnStr = `It's ${days} days until ${holiday}!`
  return  returnStr
}

console.log(happyHolidaysTo("you"))
