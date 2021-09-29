// Pseudocode
// 
var today = moment();


$(".currentDay").text(today.format("MMMM Do, YYYY"));
$(".timeToday").text(today.format("h:mm a"));