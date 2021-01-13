// // Function allows JS to run before HTML is loaded.
$(document).ready(function () {});

var nineHourEl = $("#0900-hour");
var tenHourEl = $("#1000-hour");
var elevenHourEl = $("#1100-hour");
var twelveHourEl = $("#1200-hour");
var thirteenHourEl = $("#1300-hour");
var fourteenHourEl = $("#1400-hour");
var fifteenHourEl = $("#1500-hour");
var sixteenHourEl = $("#1600-hour");
var seventeenHourEl = $("#1700-hour");

//Displays current date and time

const date = new Date();
// $("currentDay").html(Date);
console.log("This is the current date and time according:", "" + date);
const hour = date.getHours();
// console.log("This should display the current hour:", " ", hour);

// Save Button to store users input in the description area
$(".saveBtn").on("click", function () {
  var eventDesc = $(this).siblings(".description").val();
  var eventTime = $(this).parent().attr("id");
  //    Saves event description and time to local storage
  localStorage.setItem(eventTime, eventDesc);
});

$(document).ready( function () {
  $(".saveBtn").each( function () {
    var eventDesc = $(this).siblings(".description");
    var eventTime = $(this).parent().attr("id");
   eventDesc.val(localStorage.getItem(eventTime));
  })

})

// Global variable for events for each hour of the scheduler
var userInput = $("textarea");

function eventHourColor() {
  userInput.each(function (i) {
    // console.log(
    //   "this is the color class for this time block at this current hour:",
    //   "",
    //   hour
    // );

    if (i + 9 < hour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    if (i + 9 === hour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }

    if (i + 9 > hour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });
}

eventHourColor();


// function savedEvent() {
//     var savedEvent = savedEvent.stringify(eventDesc ,eventTime)
//     localStorage.setItem(".description", savedEvent);
//   }

// savedEvent()


// function getsavedEvent() {
//   var savedEvent = localStorage.getItem(".description")
    

//     if (savedEvent){
//         savedEvent=JSON.parse(savedEvent)
//     }
  

// getEvent();


// }