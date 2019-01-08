/*global describe, it*/

describe('functions', () => {
  describe('MerryChristmas', () => {
    it('returns "Merry Christmas!"', () => {
      expect(MerryChristmas()).toEqual('Merry Christmas!')
    })
  })

  describe('MerryChristmasTo(name)', () => {
    it('returns "Merry Christmas, ${name}!"', () => {
      expect(MerryChristmasTo('Daniel')).toEqual('Merry Christmas, Daniel!')
    })
  })

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'Daniel')).toEqual('Happy Independence Day, Daniel!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
