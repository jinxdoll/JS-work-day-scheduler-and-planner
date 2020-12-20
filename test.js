// // const calendar = document.querySelector("#daily-planner");

// // for (let day = 1; day <=31; day = day++);
// // console.log(day)


// // elements needed-----pulled from HTML

// // var data-time=  
// // this will need to equal the user input. so when the user puts in 9 into the form, the var data-timeofdayele will also need to match 9. So ill need a if statement to make sure they match.



// // Function allows JS to run before HTML is loaded.
// $( document ).ready(function() {})


// // Variables for start time of 9:00 am and end time of 5:00 PM
// let startTime = 0900;
// let endTime = 1700;

// // Format for moment display for hour start time and end time

// var startTime = moment().format("0900 +0000", "HH:mm");
// var endTime = moment().format("17:00 +000", "HH:mm");





// //Displays current date and time
// const date = new Date();
// const hour = date.getHours();

// // variables for hours of the work day
// const hours = [
//     "0900"
//     "1000"
//     "1100"
//     "1200"
//     "1300"
//     "1400"
//     "1500"
//     "1600"
//     "1700"
// ];
// // Format for diplay of date format
// date =moment().format("HH:mm")
// // console.log(minute);

// const dayHours = document.querySelector(".hours")

// document.querySelector(".currentday").innerHTML = date.toDateString
// document.querySelector(".hour").innerHTML = date[date.getHours].toDateString





// // Global variables
// // Hours of the day variables

// var nineHourEl= ("#0900 hour");
// var tenHourEl= ("#1000 hour");
// var elevenHourEl= ("#1100 hour");
// var twelveHourEl= ("#1200 hour");
// var thirteenHourEl= ("#1300 hour");
// var fourteenHourEl= ("#1400 hour");
// var fifteenHourEl= ("#1500 hour");
// var sixteenHourEl= ("#1600 hour");
// var seventeenHourEl= ("#1700 hour");

// // Global variables for current day - used for color coded time-block

// var scheduleForEvents = [];

// var currentDay = $("#currentDay").html(date);
// //Global variable for time-block from CSS file
// var currentTimeBlock = $("#time-block")

// // Global variable for events for each hour of the scheduler
// var currentevent = $("#currentevent")





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










// // let hours = "";

// // for(let i = 0900; i <= 1700 i++) {
// //     hours += <div>${i}</div>;
// //     dayHours.innerHTML = days;
// // }











// from script.js-----------------------------------------------------






var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About












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



// Global variable for time-block - this variable defines my time-block class in HTML
var userInput = $(".time-block");


console.log("This should display the current day:", " ", timeBlocks);



// Global variable for events for each hour of the scheduler




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


        // console.log("this is the color class for this time block at this current hour:", "", userInput);


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






// Creates a save button
//   var saveBtn = $("<button>");
//   $(saveBtn).addClass("saveBtn");
//   saveBtn.text("Add " + userInput + " to time slot ?");
//   $(".time-block").append(saveBtn);
//   // Makes button start out hidden
//   $(".save-button").hide();

// ======================================Aimee need to create object oput of time // 

$(".saveBtn").on("click", function () {   
   
       var eventDesc =  $(this).siblings(".description").val();
       var eventTime = $(this).parent().attr("id");
    //    Saves event description and time to local storage
       localStorage.setItem(eventDesc, eventTime);
    
});





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