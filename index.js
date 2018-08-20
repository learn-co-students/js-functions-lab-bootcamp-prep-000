// write your code below!
function happyHolidays() {
  return `Happy holidays!`
  console.log("Happy holidays!")
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
  console.log(`Happy holidays, ${name}!`)
}
happyHolidaysTo(`you!`)

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
  console.log(`Happy ${holiday}, ${name}!`)
}
happyHolidayTo(`Independence Day`, `you`)

function holidayCountdown(days, holiday) {
  return `It's ${days} days until ${holiday}!`
  console.log(`It's ${days} days until ${holiday}!`)
}
holidayCountdown(`20`, `Mother\'s Day`)