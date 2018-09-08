// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
var name = "Zaid"
happyHolidaysTo(name)

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
var name = "Zaid"
var holiday = "Malaysia"
happyHolidayTo(holiday, name)

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
var days = "Sunday"
var holiday = "Malaysia"
holidayCountdown(holiday, days)
