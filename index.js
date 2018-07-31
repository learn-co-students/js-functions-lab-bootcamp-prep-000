// write your code below!

function happyHolidays() {
  return 'Happy holidays!'
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
} 

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}

function holidayCountdown(holiday, days) {
  return "It\'s ${days} days until ${holiday}"
}


happyHolidays() 
happyHolidaysTo('you') 
happyHolidayTo('Independence Day', 'you') 
holidayCountdown('Mother\'s Day', 20) 

/*
// ♥ learn

> js-functions-lab@0.1.0 test /home/FSGh2018/js-functions-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 1   -_,------,
 3   -_|   /\_/\
 0   -^|__( x .x)
     -  ""  ""

  1 passing (523ms)
  3 failing

  1) functions happyHolidaysTo(name) returns "Happy holidays, ${name}!":

      Error: Expected 'Happy holidays, ${name}!' to equal 'Happy holidays, you!'
      + expected - actual

      -Happy holidays, ${name}!
      +Happy holidays, you!

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:12:38)

  2) functions happyHolidayTo(holiday, name) returns "Happy ${holiday}, ${name}!":

      Error: Expected 'Happy ${holiday}, ${name}!' to equal 'Happy IndependenceDay, you!'
      + expected - actual

      -Happy ${holiday}, ${name}!
      +Happy Independence Day, you!

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:18:57)

  3) functions holidayCountdown(holiday, days) returns "It's ${days} days until${holiday}!":

      Error: Expected 'It\'s ${days} days until ${holiday}' to equal 'It\'s 20 days until Mother\'s Day!'
      + expected - actual

      -It's ${days} days until ${holiday}
      +It's 20 days until Mother's Day!

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.it (test/index-test.js:24:52)



npm ERR! Test failed.  See above for more details.
[18:52:41] (master) js-functions-lab-bootcamp-prep-000
// ♥
 */