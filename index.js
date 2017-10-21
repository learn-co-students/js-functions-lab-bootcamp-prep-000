// write your code below!
// Task 1: Write a function called happyHolidays. This function should not accept any parameters and should return the string 'Happy holidays'
function happyHolidays() {
	return("Happy holidays!");
};
//Task 2: Write a function named happyHolidaysTo. This function should accept a paramter of the name of the person you want to wish happy holidays, and return the string
//(continued) `Happy holidays, ${name}!`
function happyHolidaysTo(name) {
	return(`Happy holidays, ${name}!`);
};
//Task 3: Write a function named happyHolidayTo. This function should accept two parameters, the holiday you want to wish them well for, and the name of the person you're
//(continued) wishing well. This function shuold return the string `Happy ${holiday}, ${name}!`
function happyHolidayTo(holiday, name) {
	return(`Happy ${holiday}, ${name}!`);
};
//Task 4: Write a function named holidayCountdown. This function should accept two parameters, the holiday name and days til that holiday. The function should
//(continued) return the string `It's ${days} days until ${holiday}!`
function holidayCountdown(holiday, days) {
  return(`It\'s ${days} days until ${holiday}!`)
};
