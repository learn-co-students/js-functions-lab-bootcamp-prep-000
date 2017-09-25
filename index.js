function happyHolidays() {
    return "Happy holidays!";
}

function happyHolidaysTo(name) {
    return "Happy holidays, " + name + "!";
}

function happyHolidayTo(nameOfHoliday,name) {
    return "Happy " + nameOfHoliday + ", " + name + "!";
}

function holidayCountdown(nameOfHoliday,numOfDays) {
    return "It's " + numOfDays + " days until " + nameOfHoliday + "!";
}

console.log(happyHolidays());
console.log(happyHolidaysTo('Monkey'));
console.log(happyHolidayTo('Christmas','Monkey'));
console.log(holidayCountdown('Christmas','91'));
