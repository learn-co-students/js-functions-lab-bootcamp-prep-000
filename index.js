function happyHolidays(){
  return("Happy holidays!")
}

console.log(happyHolidays())

function happyHolidaysTo(name){
  var Name = name
  return "Happy holidays, ${Name} !"
}

console.log(happyHolidaysTo("Navin"))

function holidayCountdown(days , holiday){
  return("It's ${days} days until ${holiday}! ")
}

console.log(holidayCountdown("5","Christmas"))
