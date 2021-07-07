// write your code below!
const happyHolidays = () =>
  'Happy holidays!'
  
const happyHolidaysTo = name =>
  `Happy holidays, ${name}!`

const happyHolidayTo = (holiday, name) =>
  `Happy ${holiday}, ${name}!`
  
const holidayCountdown = (holiday, days) =>
  `It's ${days} days until ${holiday}!`

module.exports = {
  happyHolidays,
  happyHolidaysTo,
  happyHolidayTo,
  holidayCountdown
}