// write your code below!describe('functions', () => {
/*  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })*/

/*function functionName() {
  return string.(string === string.toUpperCase)()
}*/
//if (string === string.toUpperCase)
  //return "Happy holidays!"
/*1-  describe('functions', () => {
    describe('happyHolidays', () => {
      it('returns "Happy holidays!"', () => {
        expect(happyHolidays()).toEqual('Happy holidays!')
      })
    })*/


  // # 1-

   function happyHolidays() {
    return "Happy holidays!";
   }

  /* Write a function named happyHolidays. This function
   should not accept any parameters and should return the string "Happy holidays!".
   function happyHolidays() {
       return ;              // The function returns the product of p1 and p2
       */ //-----------------------------------------------------------------------

/*describe('happyHolidaysTo(name)', () => {
  it('returns "Happy holidays, ${name}!"', () => {
    expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
  })
})
Write a function named happyHolidaysTo. This function should accept a parameter of the name of the person you want to wish happy holidays, and return the string `Happy holidays, ${name}!`*/

// # 2 -
//function happyHolidaysTo('you') {
  //  return "Happy holidays,  ${name}!"
//}
function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}
// # 3
/*functions happyHolidayTo(holiday, name) returns "Happy ${holiday}, ${name}!":
    ReferenceError: happyHolidayTo is not defined
     at Context.it (test/index-test.js:18:7)

     describe('happyHolidayTo(holiday, name)', () => {
       it('returns "Happy ${holiday}, ${name}!"', () => {
         expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
       })
     })*/


     	function happyHolidayTo(holiday, name) {
       return `Happy ${holiday}, ${name}!`
     	}


  /*    describe('holidayCountdown(holiday, days)', () => {
        it('returns "It\'s ${days} days until ${holiday}!"', () => {
          expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
        })
      })
    })*/
    function holidayCountdown(holiday, days) {
  		 return `It's ${days} days until ${holiday}!`
  	}
