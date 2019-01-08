function happyHolidays(){
  console.log("Happy holidays!")
}
happyHolidays()

function happyHolidaysTo(name){
  console.log(`Happy holidays, ${name}!`)
}
happyHolidaysTo('jay')

function happyHolidayTo(holiday, name){
  console.log(`Happy ${holiday}, ${name}!`)
}
happyHolidayTo("thanksgiving", "jay")

function holidayCountdown(days, holiday){
  console.log(`It's ${days} days until ${holiday}!`)
}
holidayCountdown("3", "friday")
