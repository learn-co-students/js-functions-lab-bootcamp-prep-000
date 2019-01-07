//I hate that tildes are variable malluable strings but quotes arent
function happyHolidays(){
  return ('Happy holidays!');
}

function happyHolidaysTo(name){
  var out = `Happy holidays, ${name}!`;
  return (out);
}

function happyHolidayTo(holiday, name){
  var message = `Happy ${holiday}, ${name}!`;
  return(message);
}

function holidayCountdown(holiday, days){
  var message = `It\'s ${days} days until ${holiday}!`;
  return (message);
  
}
test = 'test';

console.log(holidayCountdown(test,test));
console.log(happyHolidayTo(test,test));
console.log(happyHolidaysTo(test));