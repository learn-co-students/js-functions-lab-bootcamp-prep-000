// write your code below!
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy Holidays!"' () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
})
describe('functions', () => {
  describe('happyHolidaysTo', () => {
    it('returns "Happy Holidays ${name}!"' () => {
      expect(happyHolidaysTo('Kate')).toEqual('Happy holidays, Kate!')
    })
  })
})
describe('functions', () => {
  describe('happyHolidayTo', () => {
    it('returns "Happy ${holiday} ${name}!"' () => {
      expect(happyHolidayTo('Independence Day', 'Kate')).toEqual('Happy holiday, Kate!')
    })
  })
})
describe('functions', () => {
  describe('holidayCountdown', () => {
    it('returns 'It\'s ${days} until ${holiday}!')
    expect(holidayCountdown('15', 'Independence Day')).toEqual('It\'s 15 days  until Independence Day!')
  })
})
})
