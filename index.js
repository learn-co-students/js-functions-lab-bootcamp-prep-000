// write your code below!

var  happyHolidays = function() {
  return "Happy holidays!";
};

  function happyHolidaysTo(name) {
 return `Happy holidays, ${name}!`;
}

 function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`;
}

function holidayCountdown(holiday, days) {
  return `It\'s ${days} days until ${holiday}!`;
}


happyHolidays();
happyHolidaysTo('you');
happyHolidayTo('Independance Day', 'you');
holidayCountdown('Mother\'s Day', 20);