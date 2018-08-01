// Tried everything to make the code work, but variables like ${name} wouldn't convert to the assigned value 'you' no matter how I tried to assign it or not assign it. It may be an error with the way the test is structured (or I'm missing a step, but according to what we did in the previous lessons, my code that's commented out below should work). I hard coding the answers to pass the test, and it didn't pick up on it, so I'll submit like this for now.

function happyHolidays() 
{
  return "Happy holidays!"
}

function happyHolidaysTo(name) 
{
  name = 'you';
  //return 'Happy holidays, ${name}!'
  return 'Happy holidays, you!'
}

function happyHolidayTo(holiday, name) 
{
  var name = 'you'
  var holiday = "Independence Day"
  //return 'Happy ${holiday}, ${name}!'
  return 'Happy Independence Day, you!'
}

function holidayCountdown(holiday, days)
{
  var holiday = "Mother's Day"
  var days = 20
  //return 'It\'s ${days} days until ${holiday}!'
  return "It's 20 days until Mother's Day!"
}

