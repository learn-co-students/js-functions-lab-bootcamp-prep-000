// write your code below!
{
  function happyHolidays() {
  console.log("Happy holidays!")

  }
}

{
  function happyHolidaysTo(name) {
  console.log(`Happy holidays, ${name}!`);

  }
}
{
  function happyHolidayTo(holiday, name){
    console.log(`Happy ${holiday}, ${name}!`)
    happyHolidayTo(holiday, name)
  }
}
{
  function holidayCountdown(days, holiday) {
  console.log("It's ${days} days until ${holiday}!")
  holidayCountdown(days, holiday)
}
}
