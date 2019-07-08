function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return (`Happy holidays, ${name}!`)

  happyHolidaysTo(`Jessica`)
}

function happyHolidayTo(holiday, name){
  return (`Happy ${holiday}, ${name}!`)

  happyHolidayTo(`Thanksgiving`, `Jessica`)
}

function holidayCountdown(holiday, days){
  return (`It's ${days} days until ${holiday}!`)

  holidayCountdown(`20`, `Mother's Day`)
}
