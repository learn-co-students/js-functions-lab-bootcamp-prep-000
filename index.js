// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  if (name === undefined) {
    return "Happy holidays, you!"
  } else {
  return `Happy holidays, ${name}!`
}
}

function happyHolidayTo(holiday, name) {
  if (name === undefined || holiday === undefined) {
    return "Whatever dude"
  } else {
    return `Happy ${holiday}, ${name}!`
  }
}

function holidayCountdown(holiday, days) {
  if (holiday === undefined || days === undefined) {
    return "Whatever dude"
  } else {
    return `It's ${days} days until ${holiday}!`
  }
}
