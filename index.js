// write your code below!
function happyHolidays() {
  return('Happy holidays!')
}

function happyHolidaysTo(name)
{
  return (`Happy holidays, ${name}!`)
  
  }
happyHolidaysTo("Jessica")

function happyHolidayTo(holiday, name)
{
  return (`Happy ${holiday}, ${name}!`)
}
happyHolidaysTo("Halloween", "Jessica")

function holidayCountdown(days, holiday)
{
  return (`It's ${days} days until ${holiday}!`)

}
function holidayCountdown(holiday, days){
  return `It's ${days} days until ${holiday}!`;
}