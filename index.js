// write your code below!
function happyHolidays(){
  return"Happy Holidays!"
}
console.log(happyHolidays());

function happyHolidaysTo(inname){
 return`Happy Holidays ${inname}`
}

console.log(happyHolidaysTo('Deepti'));
function happyHolidaysTo(festival,name){
  return`Happy ${festival}, dear ${name}`
}
console.log(happyHolidaysTo('RakshaBandhan','Swara'));
function holidayCountdown(days,festival){
  return `Its ${days} days till ${festival}`
}
console.log(holidayCountdown(7,'Ganesh Chaturthi'));
