// write your code below!
function happyHolidays () {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}

function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
    if (days > 1) {
      return `It's ${days} days until ${holiday}!`;
    } else if (days === 1) {
      return `${holiday} is tomorrow!`;
    } else if (days === 0) {
      if (holiday === "Christmas") {
        return `Merry ${holiday}!`;
      } else {
       return `Happy ${holiday}!`;
       }
     }
}
