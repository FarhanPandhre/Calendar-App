var dt = new Date(); //returns the actual date
function renderDate(){
// var dt = new Date(); //string value of curr date and this was pushed outside the function 
// dt.setMonth(7); //it is for eg: checking ki last date current month ki sahi mili k nhi

dt.setDate(1);
var fistdayIndex = dt.getDay(); //index number of 1st day of month
// console.log(dt.getDay()); //it gives the actual position of 1st day of current month

var lastdayIndex = new Date(
    dt.getFullYear(),
    dt.getMonth()+1,     //it will give the index value of last date of current month
    0
).getDay();
// console.log(lastdayIndex); //it is just to check whether the above function 'lastdayIndex' is working proper or not
var daysOfNextMonth = 7 - lastdayIndex - 1 //7 becoz the week is of 7 days and lastdayIndex becoz the it has the value of position of current month last date and 1 becoz it is of 0 based counting system 

var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth()+1,   //ye current mahina kitne din ka hai wo batayega or end date nikal k dega
    0
).getDate();  // get date bas end date nikal k dega like kitne din ka month hai
// console.log(endDate);  // ye ek pure format mai dega date ko 

var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),   //it is to write the dates for previous month
    0
).getDate();  


var today = new Date(); //it will return the actaul date of today
// var today = new Date().getDate();
// console.log(today);

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//month and date in navbar part
document.getElementById("curr-date-navbar").innerHTML = dt.toDateString(); //returns the current date in readable format 
document.getElementById("month").innerHTML = months[dt.getMonth()]; //returns the current month 
//so after this step if u remove the content through html it will return the exact date 


// printing work on calendar is done here
var cells = "";
//getting the actual last dates position of previous month and printing the dates of previous month in reverse order
for(x = fistdayIndex; x > 0; x--){
    cells += "<div class='prev-month-date'>" + (prevDate - x + 1) + "</div>";
}

// end date part, like kitne din ka month hai 
for(i=1; i <= endDate; i++){
    if(i == today.getDate() && dt.getMonth() == today.getMonth()){ //actual position of todays date
    cells += "<div class='today'>" + i + "</div>";
    } else {
        cells += "<div>" + i + "</div>";
    }
}

//printing the dates of next month
for(j=1; j<=daysOfNextMonth; j++){
    cells += "<div class='next-month-date'>" + j + "</div>";
}

document.getElementsByClassName("days")[0].innerHTML = cells;

}

// outside the function part
function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth()-1);  //setting the previous month
    } else if(para == 'next'){
        dt.setMonth(dt.getMonth()+1);  //setting the next month 
  }
  renderDate();     //call for function
}

