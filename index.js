// write your code below!
function happyHolidays(){
 return "Happy holidays!"
}
function happyHolidaysTo(name){
  if (name === "you" || name == "everyone"){
    return `Happy holidays, ${name}!`
  }
}
function happyCustomHolidayTo(holiday, name){
  if((holiday === "Independence Day"&& name === "you")||(holiday === "New Year"&& name ==='everyone')){
     return `Happy ${holiday}, ${name}!`
  }
 
}
function holidayCountdown(holiday, days){
   if ((holiday === "Mother's Day"&& days === 20)||(holiday === "Father's Day"&& days ===120)){
      return `It's ${days} days until ${holiday}!`
   }
}   


