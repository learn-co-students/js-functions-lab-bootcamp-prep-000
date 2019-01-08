// write your code below!
var name
var holiday
var days


function happyHolidays()
{
    return "Happy holidays!"
}

function happyHolidaysTo(string)
{
    name = string
    return `Happy holidays, ${name}!`
}

function happyHolidayTo(string1, string2)
{
    holiday = string1
    name = string2
    return `Happy ${holiday}, ${name}!`

}

function holidayCountdown(string1, string2)
{
    holiday = string1
    days = string2
    return `It's ${days} days until ${holiday}!`
}
