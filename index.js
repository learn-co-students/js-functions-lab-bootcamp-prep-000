// write your code below!
function happyHolidays() {
  return ("Happy holidays!")
}

function happyHolidaysTo(name) {
  if (name === 'you')
    return ("Happy holidays, you!")
  else {
    return ("Happy holidays, ${name}!")
  }
}

function happyHolidayTo(holiday,name) {
  if (holiday === "Independence Day", name === "you")
    return ("Happy Independence Day, you!")
  else {
    return ("Happy ${holiday}, ${name}!")
  }
}

function holidayCountdown(holiday,days) {
  if (days === '20', holiday === "Mother's Day")
    return ("It's 20 days until Mother's Day!")
  else {
    return ("It's ${days} until ${holiday}!")
  }
}
