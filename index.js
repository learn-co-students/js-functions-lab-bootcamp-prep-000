function happyHolidays(string){
  return `Happy holidays!`
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("you")

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

happyHolidaysTo("Independence Day","you")

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown("20","Mother's Day")