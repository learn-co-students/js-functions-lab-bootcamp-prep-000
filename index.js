
function happyHolidays()
{
  return 'Happy holidays!';
}
console.log(happyHolidays());


function happyHolidaysTo( holiday='October (Hacktober fest)' , name='Max')
{
  return 'Happy '+ holiday +', '+ name +'!';
}
console.log(happyHolidaysTo());


function holidayCountdown(holidayName ='November', numberDaysUntilHoliday ='22')
{
  return 'It\'s '+ numberDaysUntilHoliday +' days until '+ holidayName +'!';
}
console.log(holidayCountdown());
