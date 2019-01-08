/*global describe, it*/

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
  var name = "you"
  var holiday = "Independence Day"
  var days = "20"

  function happyHolidays() {
  return "Happy holidays!"
  }


  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  function happyHolidaysTo(name) {
    return "Happy holidays, " + name + "!"
  }

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  function happyHolidayTo(holiday, name) {
  return "Happy " + holiday + ", " + name + "!"
  }


  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })

  function holidayCountdown(holiday, days) {
  return "It\'s " + days + " days until " + holiday + "!"
  }

})
