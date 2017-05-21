// write your code below!
function happyHolidays(){
  var greetings = "Happy holidays!";
  return greetings;
}
happyHolidays()

function happyHolidaysTo(name) {

  return `Happy holidays, ${name}!`;
}
happyHolidaysTo (`Alisha`)

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
happyHolidaysTo(`Ramadan`, `Alisha`)

function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`
}
holidayCountdown(`7`, `Ramadan`)
