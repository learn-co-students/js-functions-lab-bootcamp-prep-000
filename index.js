// write your code below!
name = "Laura"
holiday = "Mother's Day"
days = "20"

function happyHolidays(){
  return "Happy holidays!"
}
function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}

happyHolidaysTo(name)
happyHolidayTo(holiday, name)
holidayCountdown(holiday, days)