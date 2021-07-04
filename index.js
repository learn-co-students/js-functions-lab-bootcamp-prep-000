// write your code below!
var happyHolidays = () => {return `Happy holidays!`};

var happyHolidaysTo = (name) => {return `Happy holidays, ${name}!`};

var happyHolidayTo = (holiday, name) => {return `Happy ${holiday}, ${name}!`};

var holidayCountdown = (holiday, days) => {return `It's ${days} days until ${holiday}!`};


console.log(happyHolidays());
console.log(happyHolidaysTo("Sam"));
console.log(happyHolidayTo("Festivus", "Bob"));
console.log(holidayCountdown("Festivus", 20));
