
describe('happyHolidays(string)', function() {
    it('returns "Happy Holidays! to string "Happy Holidays"', function() {
      expect(happyHolidays("Happy Holidays!")).toEqual("Happy Holidays!")
    })
  })

  describe('happyHolidaysTo(name)', function () {
    it('returns "Happy holidays, to string ${name}"', function () {
      expect(happyHolidaysTo('spring')).toEqual('Happy holidays, spring')
    })
  })

  describe('happyHolidayTo(holiday, name)', function () {
    it('returns "Happy ${holiday}, ${name}!"', function () {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })

  describe('holidayCountdown(holiday, days)', function () {
    it("returns its ${days} days until ${holiday}!",
    function () {
      expect(holidayCountdown("Honukka", 20)).toEqual("It's 20 days until Honukka!")
    })
  })