// write your code below!
var date = "July 3rd"
console.log("My birthday is " + date)
console.log(`My birthday is ${date}`)
console.log(`I have ${1+1} pets` )
console.log("I have " + 1 + 1 + " pets")
console.log("I have " + (1 + 1) + " pets")
function happyHolidays(string) {
return "Happy holidays!"
}
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
function happyCustomHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}