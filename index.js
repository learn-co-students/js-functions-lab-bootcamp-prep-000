// write your code below!
function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return "Happy holidays, " + name + "!";
}

function happyHolidayTo(holiday,name){
  return "Happy " + holiday + ", " + name + "!";
}

function holidayCountdown(holiday,days){
    if(days === 1){
      return "It's " + days + " day until " + holiday + "!";
    }else if(days<1){
      return "It's " + holiday + "!";
    } else{
      return "It's " + days + " days until " + holiday + "!";
}
}
