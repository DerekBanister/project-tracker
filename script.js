// setup display of current time with moment.js <---------- Pseudocode
// Pseudocode
// 

var datetime;
var date;

var update = function(){
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'))
};

$(document).ready(function(){
    datetime = $('.currentDay')
    update();
    setInterval(update, 1000);
});