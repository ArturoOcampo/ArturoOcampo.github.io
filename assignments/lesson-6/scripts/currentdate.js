  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  document.getElementById("WeekDay").innerHTML = n + ", ";


var m = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

    if(dd<10) {
    dd = '0'+dd
    } 

    if(mm<10) {
    mm = '0'+mm
    } 

today = dd + " " + months[d.getMonth()] + " " + yyyy;
document.getElementById("CurrentDate").innerHTML = today;