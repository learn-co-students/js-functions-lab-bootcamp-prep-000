// write your code below!
function happyHolidays(){
  console.log("Happy holidays!")
  return "Happy holidays!"
}

happyHolidays()

function happyHolidaysTo(name){
  console.log(`Happy Holidays, ${name}!`)
  return `Happy Holidays, ${name}!`
}

happyHolidaysTo("Mathew")

function happyHolidayTo(holiday,name){
  console.log(`Wishing you a happy ${holiday}, ${name}!`)
  return `Wishing you a happy ${holiday}, ${name}!`
}

happyHolidayTo("Christmas", "Jenny")

function holidayCountdown(days, holiday){
  console.log(`It's ${days} days until ${holiday}!`)
  return `It's ${days} days until ${holiday}!`
}

holidayCountdown(26, "Thanks Giving")