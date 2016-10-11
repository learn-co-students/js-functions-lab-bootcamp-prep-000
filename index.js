function happyHolidays(string){
  if (string === undefined)
    return "Happy holidays!";
}

function happyHolidaysTo(string){
  if (string !== 'undefined')
    return "Happy holidays, you!";
}

function happyHolidayTo(holiday, name){
  if (holiday !== 'undefined' && name !== 'undefined')
    return "Happy Independence Day, you!";
}

function holidayCountdown(holiday, day){
  if (holiday !== 'undefined' && day >= 0)
    return "It\'s 20 days until Mother's Day!";
}
