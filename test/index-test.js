/*global describe, it*/
var index = require("../index.js")



describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(index.happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(index.happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(index.happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(index.holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
