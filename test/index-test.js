/*global describe, it*/

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays(HappyHolidays)).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo()', () => {
    it('returns "Happy holidays, ${Name}!"', () => {
      expect(happyHolidaysTo('Name')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${Independence Day}, ${Angelo}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${20} days until ${Mothers Day}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
