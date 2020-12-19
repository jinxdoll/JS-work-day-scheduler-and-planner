

// Function allows JS to run before HTML is loaded.
$(document).ready(function () { });



//Displays current date and time
const date = new Date();
const hour = date.getHours();

// Variables for start time of 9:00 am and end time of 5:00 PM
let startTime = 0900; moment().format('MMMM Do YYYY, h:mm:ss a');
let endTime = 1700; moment().format('MMMM Do YYYY, h:mm:ss a');


console.log("This should display th current date and time according to  my browser:", "", date);
console.log("This should dipaly the current hour:", " ", hour);


// Global variables for current day - this variable defines my id=currentDay in my HTML header

var currentDay = $("#currentDay").html(date);



// Global variable for time-bloc - this variable deines my time-block class in HTML
var timeBlocks = $(".time-block");


console.log("This should dispaly the current day:", " ", timeBlocks);



// Global variable for events for each hour of the scheduler
var userInput = $("textarea");

console.log("this will dipaly the user's input for each event:", "", userInput);




// Global variables
// Hours of the day variables

var nineHourEl = $("#0900-hour");
var tenHourEl = $("#1000-hour");
var elevenHourEl = $("#1100-hour");
var twelveHourEl = $("#1200-hour");
var thirteenHourEl = $("#1300-hour");
var fourteenHourEl = $("#1400-hour");
var fifteenHourEl = $("#1500-hour");
var sixteenHourEl = $("#1600-hour");
var seventeenHourEl = $("#1700-hour");


// Global variables for current day - used for color coded time-block





var scheduleForEvents = [];


// Global variables for current day - used for color coded time-block


var currentDay = $("#currentDay").html(date);


// Global variable for events for each hour of the scheduler
var currentevent = $("#currentevent");

// =============FUNCTIONS============

function getNewdate() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};





// ---------possible funtion for color coding time acoridng to CSS file

function eventHourColor() {
    userInput.each(function (i) { 


        console.log("this is the color class for this time block at this current hour:", "" , userInput);


        if (i + 9 > hour) {
            $(this).addClass("future");
        }
        if (i + 9 < hour) {
            $(this).addClass("past");
            
        } else { 
            if (i + 9 === hour) 
            $(this).addClass("present");
            
        }
     
    });


};

eventHourColor();
//  console.log("this is the color class for this time block at this current hour:", "" ,($(this).attr("id"), i + 9));



// const dayHours = document.querySelector(".hours")

// document.querySelector(".currentday").innerHTML = date.toDateString
// document.querySelector(".hour").innerHTML = date[date.getHours].toDateString







// console log button clicked


$(".save-Btn").on("click", function () {
    console.log("Save button click test for each HTMl elelment for the time-block rows:", "", save - Btn);
    //    var nineHourEl =  $(this).parent().attr("time-block");
    //    var currentevent = $(this).parent().find("textarea").val();
    //    localStorage.setItem(elementTime, currNote);
});

// $(".time-block").each(function() {
//     var nineHourEl = $(this).attr("data-time");
//     var currentevent = localStorage.getItem(elementTime);
//     $(this).find("textarea").val(currNote);
// })







// for($(".time-block").each(function() {
//     var nineHourEl = $(this).attr("time-block")
//     if (currentTimeBlock < nineHourEl) {
//         $(this).css("#past");
//     } else if (nineHourEl === currentTimeBlock) {
//         $(this).css("#present");

//         else {
//             $(this).css("future");

//         }
//     }


// )};










// let hours = "";

// for(let i = 0900; i <= 1700 i++) {
//     hours += <div>${i}</div>;
//     dayHours.innerHTML = days;
// }