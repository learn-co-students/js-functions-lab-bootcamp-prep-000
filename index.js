// write your code below!
function happyHolidays() {
  return("Happy holidays!")
}

function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
happyHolidaysTo('David')

function happyHolidayTo(holiday, firstName) {
  return(`Happy ${holiday}, ${firstName}!`)
}
happyHolidayTo('Xmas', `David`)

function holidayCountdown(holiday, days) {
  return(`It's ${days} days until ${holiday}!`)
}
holidayCountdown(`20`, 'Xmas')
