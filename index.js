// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  var statement = "Happy holidays, " + name + "!";
  // var statement = 'Happy holidays, ${name}!';

  return statement; 
  // return "Happy holidays, ${name}!"
}

function happyHolidayTo(holiday, name){
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday, days){
  return "It\'s " + days + " days until " + holiday + "!";
}