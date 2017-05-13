function happyHolidays(){
  var string = "Happy holidays!"
  return string
}

function happyHolidaysTo(name){
  return "Happy Holidays, ${name}"
}

function happyHolidaysTo(holiday,name){
  return "Happy ${holiday}, ${name}"
}

function holidayCountdown(days,holiday){
  return "It's ${days} days until ${holiday}!"
}

holidayCountdown(10,"Christmas")
happyHolidays()
happyHolidaysTo("Cj")
happyHolidaysTo("Christmas","CJ")
