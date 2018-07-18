// write your code below!
function happyHolidays(){
  console.log("Happy holidays!")
  return "Happy holidays!"
}

happyHolidays()

/**/
function happyHolidaysTo(name){
  console.log(`Happy holidays, ${name}!`)
  return `Happy holidays, ${name}!`
}

happyHolidaysTo("you")

/**/
function happyHolidayTo(holiday,name){
  console.log(`Happy ${holiday}, ${name}!`)
  return `Happy ${holiday}, ${name}!`
}

happyHolidayTo("Independence Day", "you")

/**/
function holidayCountdown(holiday, days){
  console.log(`It's ${days} days until ${holiday}!`)
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown("Mother's Day", 20 )