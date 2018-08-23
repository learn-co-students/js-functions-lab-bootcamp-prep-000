function happyHolidays () {
  return "Happy holidays!"
}

describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })









function happyHolidaysTo (name) {
  if (name = "you") {
  return "Happy holidays, you!"}
}
  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })






function happyHolidayTo (holiday, name){
if (holiday = 'Independence Day', name = 'you'){
return "Happy Independence Day, you!"
}
}

  describe('happyHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
    })
  })













function holidayCountdown (holiday, days){
  if (holiday = 'Mother\'s Day', days = 20)
  return "It\'s 20 days until Mother's Day!"
}




  describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
    })
  })
})
