function happyHolidays(){
  var greeting = "Happy holidays!";
  return greeting;
}

function happyHolidaysTo(name) {
  var greeting = `Happy holidays, ${name}!`
  return greeting;
}

function happyHolidayTo(holiday, name) {
  var greeting = `Happy ${holiday}, ${name}!`
  return greeting;
}

function holidayCountdown(holiday, days){
  var greeting = `It's ${days} days until ${holiday}!`
  return greeting;
}
