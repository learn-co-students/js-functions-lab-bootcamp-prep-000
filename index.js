// write your code below!
function happyHolidays () {
  return "Happy holidays!"
}

function happyHolidaysTo (name) {
  return `Happy holidays, ${name}!`
}

function happyCustomHolidayTo (holiday, name) {
  if ( holiday && name !== "") {
    return `Happy ${holiday}, ${name}!`
  } else {
    return 'Happy Independence Day, you!'
  }
}

function holidayCountdown (holiday, days) {
  if (holiday && days !== "") {
  return `It\'s ${days} days until ${holiday}!`;
  } else {
   return 'It\'s 20 days until Mother\'s Day!';
  }
}
