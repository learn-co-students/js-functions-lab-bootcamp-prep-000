// write your code below!
function happyHolidays(){
  return"Happy holidays!"
}
happyHoliday("Happy holidays!")

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
happyHolidaysTo("you")

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo("Independence Day","you")

function holidayCountdown(holiday, days){
    return `It's ${days} days until ${holiday}!`
}
holidayCountdown("20","Mother's Day")
