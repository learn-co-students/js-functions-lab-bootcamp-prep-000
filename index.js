// write your code below!

function happyHolidays() {
  return("Happy holidays!")
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`
}

/* tried (days, holidays) but it needed to be in order (holiday, days). Must watch this order of what directions are asking. I though I needed days first because days came first in my return line. Not true. */
