function happyHolidays(){
  console.log("Happy Holidays!")
}

function happyHolidaysTo(name){
  console.log("Happy holidays,  " + name)
}

function happyHolidayTo(holiday,name){
  console.log('Happy ' + holiday + ', ' + name + '!')
}

function holidayCountdown(days, holiday){
  console.log("It's " + days.toString()  + " days untill " + "holiday!")
}

happyHolidays()

happyHolidaysTo("Nemanja")

happyHolidayTo("easter","Nemanja")

holidayCountdown(90,"Christmas")
