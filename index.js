function happyHolidays(){
  return("Happy holidays!")
}

function happyHolidaysTo(arg){
  return(`Happy holidays, ${arg}!`)
}

function happyHolidayTo(holiday, name){
  return(`Happy ${holiday}, ${name}!`)
}

function holidayCountdown(holiday, daysTil){
  return(`It\'s ${daysTil} days until ${holiday}!`)
}

console.log(happyHolidaysTo("Joe"))