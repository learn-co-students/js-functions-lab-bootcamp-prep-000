/*global describe, it*/

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('Jonathan')).toEqual('Happy holidays, Jonathan!')
      expect(happyHolidaysTo('everyone')).toEqual('Happy holidays, everyone!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Halloween', 'Jonathan')).toEqual('Happy Halloween, Jonathan!')
      expect(happyHolidayTo('New Year', 'everyone')).toEqual('Happy New Year, everyone!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Halloween", 20)).toEqual("It's 20 days until Halloween!")
    })
  })
})
