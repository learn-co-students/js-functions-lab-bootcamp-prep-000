// write your code below!
function happyHolidays() {
  return "Happy holidays!";
}
function happyHolidaysTo(name) {
  this.name = name; {
  return "Happy holidays, " + (this.name) + "!";
}
}
function happyHolidayTo(holiday, name) {
  this.holiday = holiday;
  this.name = name; {
    return "Happy " + (this.holiday) + ", " + (this.name) + "!";
  }
}
function holidayCountdown(holiday, days) {
  this.number = days;
  this.holiday = holiday; {
    return "It's " + (this.number) + " days until " + (this.holiday) + "!";
  }
}
