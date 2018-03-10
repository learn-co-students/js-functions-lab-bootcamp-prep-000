function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo(name){
return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday,name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday,days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("Independence day","zach")
holidayCountdown(10,"Christmas")