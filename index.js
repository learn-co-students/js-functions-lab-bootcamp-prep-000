// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}

happyHolidays()
console.log(happyHolidaysTo("Graeme"))
console.log(happyHolidayTo("Christmas", "Carrie"))
console.log(holidayCountdown("30", "Hannakuh"))
