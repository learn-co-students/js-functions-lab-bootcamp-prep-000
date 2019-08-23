module.exports = {

  happyHolidays: function(){
    return "Happy holidays!"
  },
  
  happyHolidaysTo: function(name){
    return `Happy holidays, ${name}!`
  },
  
  happyHolidayTo: function(holiday,name){
    return `Happy ${holiday}, ${name}!`
  },
  
  holidayCountdown: function(holiday,days){
    return `It's ${days} days until ${holiday}!`
  }
}


