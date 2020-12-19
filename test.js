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