// write your code below!
function happyHolidays (){
    return "Happy holidays!"
}

function happyHolidaysTo (name){
    if (name === undefined)
        name = "you"

    return `Happy holidays, ${name}!`
}

function happyHolidayTo (holiday, name){
    if (holiday === undefined)
        holiday = "holiday"

    if (name === undefined)
            name = "you"

    return `Happy ${holiday}, ${name}!`
}

function holidayCountdown (holiday, days){
    return `It's ${days} days until ${holiday}!`
}
