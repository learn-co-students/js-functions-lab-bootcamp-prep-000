// write your code below!
function happyHolidays(){
  return `Happy holidays!`
}
console.log(happyHolidays())

function happyHolidaysTo(personName){
  return `Happy holidays, ${personName}!`
}
console.log(happyHolidaysTo("Alicja"))

function happyHolidayTo(holidayName, personName){
  return `Happy ${holidayName}, ${personName}!`
}
console.log(happyHolidayTo("Easter", "Leo"))

function holidayCountdown(holidayName, numberOfDays) {
  return `It's ${numberOfDays} days until ${holidayName}!`
}
console.log(holidayCountdown("Christmas", 59))
