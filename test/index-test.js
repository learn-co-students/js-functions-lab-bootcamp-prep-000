/*global describe, it*/

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
      expect(happyHolidaysTo('everyone')).toEqual('Happy holidays, everyone!')
    })
  })

  describe('happyCustomHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyCustomHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
      expect(happyCustomHolidayTo('New Year', 'everyone')).toEqual('Happy New Year, everyone!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
      expect(holidayCountdown("Father's Day", 120)).toEqual("It's 120 days until Father's Day!")
    })
  })
})

