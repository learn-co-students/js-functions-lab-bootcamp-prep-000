//expect (happy holidays) to equal (happy holidays)
//expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
//expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
//expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")

function happyHolidays(string) {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  console.log('you')
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name) {
  console.log("Independence Day", 'you')
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(holiday, days) {
  console.log("Mothers Day", 20)
  return `It\'s ${days} days until ${holiday}!`
}
