function happyHolidays() {
  console.log('Happy holidays!')
  return `Happy holidays!`
}

happyHolidays()

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!` 
  console.log('Happy holidays, you!')
}

happyHolidaysTo('you')

function happyHolidayTo(holiday, name) {
  console.log()
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo('Independance Day','you')

function holidayCountdown(days, holiday) {
    return `It's ${days} days until ${holiday}!`
}

