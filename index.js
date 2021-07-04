function happyHolidays()
{
  return "Happy holidays!"
}
happyHolidays();

function happyHolidaysTo(name){
  return "Happy holidays, " + name + "!"
}

console.log(happyHolidaysTo("you"), happyHolidayTo("Independence Day","you"))

function happyHolidayTo(holiday,name){
  return "Happy " + holiday + ', ' + name + '!'
}

function holidayCountdown(holiday,days){
  return "It's " + days + " days until " + holiday + "!" 
}

console.log(holidayCountdown("Christmas", 26))

