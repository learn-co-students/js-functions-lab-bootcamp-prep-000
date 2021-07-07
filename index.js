function happyHolidays () {
  return "Happy holidays!"
}
function happyHolidaysTo (name) {
  return `Happy holidays, ${name}!`
}
function happyHolidayTo (holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown (days, holiday) {
  if (parseInt(days)===days) {
    return `It's ${days} days until ${holiday}!`
  } else {
    return `It's ${holiday} days until ${days}!`
  }
}
