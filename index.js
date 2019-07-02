// write your code below!
function happyHolidays(){
  var string = "Happy holidays!"
  return string
}
happyHolidays()

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
happyHolidaysTo('Bello Osagie')

function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo('Independence Day', 'Bello Osagie')

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
holidayCountdown("Mother's Day", 20)
