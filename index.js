// write your code below!
var date = "july 3rd"
console.log(`my birthday is ${date}`)
console.log(`I have ${1 + 1} pets`)

const name = "Greg"
const holiday = "Indepence day"
const days = 11

function happyHolidays() {
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

console.log(happyHolidays())
console.log(happyHolidaysTo(name))
console.log(happyCustomHolidayTo(holiday, name))
console.log(holidayCountdown(holiday, days))
