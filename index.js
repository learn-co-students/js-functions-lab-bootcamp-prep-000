const happyHolidays = () =>{
  return "Happy holidays!"
}

const happyHolidaysTo = name =>{
  return `Happy holidays, ${name}!`
}

const happyHolidayTo = (holiday,name) =>{
  return `Happy ${holiday}, ${name}!`
}

const holidayCountdown = (days,holiday)=>{
  return `It's ${days} days until ${holiday}!`
}

// Testing
console.log(happyHolidays())
console.log(happyHolidaysTo("Hamidou"))
console.log(happyHolidayTo("thanksgiving","Anne"))
console.log(holidayCountdown(3,"christmas"))

