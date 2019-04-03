// write your code below!
//Write a function named happyHolidays. 
//This function should not accept any parameters and should
//return the string "Happy holidays!"
function happyHolidays(){
return("Happy holidays!")
}

//Write a function named happyHolidaysTo. 
//This function should accept a parameter of the name of the person you want to wish happy holidays, 
//and return the string `Happy holidays, ${name}!`
var name = "you",
    holiday = "holiday";
    
function happyHolidaysTo(name) {
  return(`Happy holidays, ${name}!`)
}
function happyHolidayTo(holiday, name) {
return(`Happy ${holiday}, ${name}!`)
}
function holidayCountdown(holiday, days){
  return(`It's ${days} days until Mother's Day!`)
}
