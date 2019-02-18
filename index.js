function happyHolidays() {
  return ("Happy holidays!")
}
happyholidays()

function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`)
}
happyHolidaysTo("claista")

function happyHolidayTo(holiday , name) {
  return (`Happy ${holiday}, ${name}!`)
}
happyHolidayTo("Independance Day" , "Claista")

function holidayCountdown(holiday , days) {
  return (`It'\s ${days} days until ${holiday}!`)
}
holidayCountdown( "Mother's Day" , 20)
