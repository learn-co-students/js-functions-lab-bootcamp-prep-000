// write your code below!
function happyHolidays() {
  return 'Happy holidays!';
};

function happyHolidaysTo(name) {
  return happyHolidays().slice(0,-1) +', '+ `${name}` + "!";
};

function happyHolidayTo(holiday, name) {
  return 'Happy ' + holiday + ', ' + name + "!";
};

function holidayCountdown(holiday, days) {
  return "It's " + days + " " + "days until " + holiday + "!";
};
