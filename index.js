// write your code below!
//Happy Coding Day

var md  = "Mother\'s Day";

function happyHolidays ()  {
  return ("Happy holidays!");
}

function happyHolidaysTo (namen) {
  return( 'Happy holidays, ' + namen + '!' ) ;
}

function happyHolidayTo (theDay , namen) {
  return  ("Happy " + theDay + "\, "  + namen + "!" ) 
}

function holidayCountdown (theDay ,  daysTill) {
  return  ("It\'s " +  daysTill + " days until " + theDay +"!" ) 
}



  
  console.log( happyHolidays()) ;
  console.log( happyHolidaysTo( "James"));
  console.log( happyHolidayTo(md ,"James"));
  console.log( holidayCountdown(md , 25));
  
  