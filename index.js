function happyHolidays(){
  return ("Happy holidays!")
}

function happyHolidaysTo(name){
  return "Happy holidays, ${name}!"
}

function happyHolidayTo(greeting, name){
  return "${greeting}, ${name}!"
}

function holidayCountdown(days, holiday){
  return "It\'s ${days} days until ${holiday}!" 
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("Happy Independence", "you")
holidayCountdown("20", "Mother\'s Day")