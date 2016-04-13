//Initiates start and end dates
var startDate = new Date("August 5, 1516 00:00:00");
var endDate = new Date("March 12, 2016 00:00:00");

//generates random dates between the startDate and endDate
//function works great!
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var randomBirthday = randomDate(startDate, endDate);

module.exports = randomBirthday;
