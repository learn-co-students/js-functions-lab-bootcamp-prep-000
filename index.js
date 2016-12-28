function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  name="you"
  return "Happy holidays, "+name+"!";
}

function happyHolidayTo(name, holiday){
name="you"
holiday="Independence Day"
  return "Happy " +holiday+ ", " +name+ "!";
}

function holidayCountdown(days, holiday){
  days=20
  holiday="Mother's Day"
  return "It's "+days+" days until "+holiday+"!";
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("you", "Independence Day")
holidayCountdown(20, "Mother's Day")
