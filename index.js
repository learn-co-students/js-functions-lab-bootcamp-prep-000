// write your code below!
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })

  describe('happyHolidaysTo(Ashley)', () => {
    it('returns "Happy holidays, ${Ashley}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })

  describe('happyHolidayTo(holiday, Ashley)', () => {
    it('returns "Happy ${holiday}, ${Ashley}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
