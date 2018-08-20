function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysto(name){
  return "Happy holidays, to ${name}!"
}
happyHolidaysTo ("You")

function happyHolidayTo(holday, name ){
  return "Happy ${holiday}, ${name}!"
} 
happyHolidayTo ("Equinox","You" )


function holidayCountdown(holiday , days){
  return "It's( ${number} ) days until ($){holiday})!"
}
holidayCountdown ("20", "Equinox")