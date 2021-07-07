 # JavaScript Functions

## Objectives

1. Write a function that returns a value
2. Write a function that takes in a parameter
3. Write a function that takes in multiple parameters

## Introduction

You'll be writing your solution in `index.js`.

In this lab, we're going to develop our communication skills in JavaScript.
We're feeling festive, so we're going to be wrapping up common holiday greetings
as functions so that we don't have to repeat ourselves. The beauty of functions
is that we could reuse these functions for the text of greeting cards, for
spoken greetings, for song lyrics, etc...

## Template Literals

There are two ways main ways to include variables inside a string. Say we had a variable named `date` that we assign to a value:

```js
var date = "July 3rd"
```

In JavaScript, we can use operators to concatenate (join) two strings, or in this case, a string and a variable, like so:

```js
console.log("My birthday is " + date)
```

With `date` defined, the above code will log `My birthday is July 3rd`. However,
by using a slightly modified syntax, we can achieve the same thing by embedding
a variable into a string. These are called [template
literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
and rewriting the above `console.log` with one would look like this:

```js
console.log(`My birthday is ${date}`)
```

This will also log `My birthday is July 3rd`.

Now, there are two important changes to the syntax: Any variables we want to
include must be wrapped in curly braces (`{ }`) and preceded by a dollar sign
(`$`). In addition, instead of single, `` ' ``, or double quotes, `` " ``, we
**must** use backticks, `` ` ``. If backticks are not used, JavaScript **will
interpret the dollar sign and curly braces as a normal part of the string**,
resulting in `My birthday is ${date}`! Any expression can be included in
template literals, not just variables, so we could write something like:

```js
console.log(`I have ${1 + 1} pets`)
```

And get `I have 2 pets`. Note that this will not log the same thing if you did
the following:

```js
console.log("I have " + 1 + 1 + " pets")
```

This logs `I have 11 pets`! JavaScript converts both `1`s into strings rather than adding them together first. You would need to write the following to get the same result as template literals:

```js
console.log("I have " + (1 + 1) + " pets")
```

You can use either operators or template literals to construct larger strings
with dynamic values. Template literals are just a way to make your code a little
easier to read and to help ensure JavaScript does not misinterpret when
combining different data types into strings, like we just saw.

## Instructions

1. Write a function named `happyHolidays`. This function should not accept any
   parameters and should return the string `"Happy holidays!"`.

2. Write a function named `happyHolidaysTo`. This function should accept a
   parameter of the name of the person you want to wish happy holidays, and
   return the string `` `Happy holidays, ${name}!` ``

3. Write a function named `happyCustomHolidayTo`. This function should accept two
   parameters, the holiday you want to wish them well for, and the name of the
   person you're wishing well. Order of parameters matters, so make sure to first pass in the holiday and then the name. This function should return the string
   `` `Happy ${holiday}, ${name}!` ``

4. Write a function named `holidayCountdown`. This function should accept two
   parameters, the holiday name and number of days until that holiday. The
   function should return the string 
   `` `It's ${days} days until ${holiday}!` ``. Note that although `days` is
   used first when constructing the returned string, `holidayCountdown` should
   take in the holiday name first, then the days until that holiday.
