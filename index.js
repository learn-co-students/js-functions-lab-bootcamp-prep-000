// write your code below!




describe ('functions'){
  describe ('happyHolidays'){
    it('returns "Happy Holidays!"'){
      expect (happyHolidays()).toEqual('Happy Holidays!')
    }
  }

describe ('happyHolidaysTo(name)'){
  it('returns "Happy Holidays, ${name}"'){
    expect (happyHolidaysToMonique).toEqual('Happy Holidays, Monique!')
  }
}

describe ('happyHolidayTo(holiday,name'){
  it('returns "Happy ${hoiday}, ${name}!"'){
    expect (happyHolidayTo('Birthday, Monique')).toEqual('Happy Birthday, Monique!')
  }
}

describe ('holidayCountdown(holiday,days)'){
  it('returns "It\'s ${days} days until ${holiday}!"'){
    expect (holidayCountdown("Monique\'s Birthday,345")).toEqual("Its 345 days until Monique\'s Birthday!")
    }
  }
}

