// write your code below!


function happyHolidays() {
  return (`Happy holidays!`)
}

function happyHolidaysTo(namee) {
  return (`Happy Holidays, ${namee} !` )
}

function happyHolidayTo(namee,holiday) {
  return (`Happy ${holiday} , ${namee} !`)
}

function holidayCountdown (holiday,days) {
  return (`Its ${days} until ${holiday} ! `)
}

console.log(happyHolidays())
console.log(happyHolidayTo('Steve'))
console.log(happyHolidayTo('Steve','xmas'))
console.log(holidayCountdown('St Patrics day',3))
