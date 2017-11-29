// write your code below!
function happyHolidays(){
  return("Happy holidays!");
}

function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`)

}
function happyHolidayTo(holiday, name) {
  return (`Happy ${holiday}, ${name}!`)
}

function holidayCountdown(days, holiday){
  return ("It's" + " " +  holiday + " "+ "days until" + " "+ days +"!")
}

happyHolidays();
happyHolidaysTo("you");
happyHolidayTo("thanksgiving", "alex");
holidayCountdown(20,"Mother's Day");
