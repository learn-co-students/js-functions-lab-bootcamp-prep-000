// write your code below!
function happyHolidays(){
return "Happy holidays!";
}

function happyHolidaysTo(name){
  return "Happy holidays, " + `${name}` + "!";
}

function happyHolidayTo(holiday, name){
  var happyHolidaysTo = "Happy " + `${holiday}`+", "+`${name}`+"!";
  return happyHolidaysTo;
}

function holidayCountdown(holiday, days){
  return "It's " + `${days}` +" days until " + `${holiday}` +"!";
}
