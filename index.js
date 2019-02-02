// write your code below!


function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday,name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday,days){
  return `It's ${days} days until ${holiday}!`
}

console.log ( happyHolidays())
console.log(happyHolidaysTo("You"))
console.log(happyHolidayTo("Independence Day", "you"))
console.log(holidayCountdown(20, "Mother's Day"))
