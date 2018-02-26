// write your code below!
function happyHolidays() {
  return 'Happy holidays!';
}

function happyHolidaysTo(name) {
  return 'Happy holidays, ' + name + '!';
}

function happyHolidayTo(holiday, name) {
  return 'Happy ' + holiday + ', ' + name + '!';
}

function holidayCountdown(holiday, dy) {
  return 'It\'s ' + dy + ' days until ' + holiday + '!';
}

var a = happyHolidays();
console.log(a);
var b = happyHolidaysTo("David Kwon");
console.log(b);
var c = happyHolidayTo("birthday", "David Kwon");
console.log(c);
var d = holidayCountdown("birthday", 15);
console.log(d);