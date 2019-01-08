// write your code below!
function happyHolidays(){
  return 'Happy holidays!'
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name){
 return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(days, holiday){
  return `It\'s ${days} days until ${holiday}!`
}

console.log(happyHolidays())
console.log(happyHolidaysTo('you'))
console.log(happyHolidayTo('you', 'Independence Day'))
console.log(holidayCountdown(20, 'Mother\'s Day'))