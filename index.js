// write your code below!
// just say happy holidays
function happyHolidays() {
    return "Happy holidays!"
}

// say holiday greeting to:
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
// and call it
happyHolidaysTo ("you")

//happy holidays 2 parameters
function happyHolidayTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
// and call it with correct parameters
happyHolidayTo("Independence Day", "you")

// countdown to mothers day
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}
// and call it
holidayCountdown("20", "Mother's Day")
