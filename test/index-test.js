/*global describe, it*/

describe('functions', (toEqual) => {
  ('happyHolidays', (toEqual) => {
    it('returns "Happy holidays!"', (happyHolidays) => {
      expect(happyHolidays()).toEqual("Happy holidays!")
    })
  })

  describe('happyHolidaysTo(name)', () => {

    ('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    ('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    ('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
