
$(document).ready(function(){
    let update = function () {
        $("#currentTime").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      };
      setInterval(update, 1000);

    // event listner for save button
$(".saveBtn").on("click", function () {
    console.log("savebtn clicked")
    var text = $(this).siblings(".user-text").val();
    var time = $(this).parent().attr("id");
    // put them into localstorage
    
    localStorage.setItem(time, text)
    console.log(text, time)
})

$("#clock-9 .user-text").val(localStorage.getItem("clock-9"));
$("#clock-10 .user-text").val(localStorage.getItem("clock-10"));
$("#clock-11 .user-text").val(localStorage.getItem("clock-11"));
$("#clock-12 .user-text").val(localStorage.getItem("clock-12"));
$("#clock-1 .user-text").val(localStorage.getItem("clock-1"));
$("#clock-2 .user-text").val(localStorage.getItem("clock-2"));
$("#clock-3 .user-text").val(localStorage.getItem("hour-3"));
$("#clock-4 .user-text").val(localStorage.getItem("hour-4"));
$("#clock-5 .user-text").val(localStorage.getItem("clock-5"));
function schedualTracker() {
     // get current hour
     var currentHour = moment().hour();

     // loop over  user-block
     $(".user-block").each(function(){
         var timeBlock = parseInt($(this).attr("id").split("hour")[1])
         console.log(currentHour, timeBlock) 
         if (timeBlock < currentHour) {
             $(this).addClass("past");
             $(this).removeClass("future");
             $(this).removeClass("present");
         }
         else if (timeBlock === currentHour) {
             $(this).removeClass("past");
             $(this).addClass("present");
             $(this).removeClass("future");
         }
         else {
             $(this).removeClass("present");
             $(this).removeClass("past");
             $(this).addClass("future");
         }
 
     })
}
schedualTracker();
   
})




    



// function createBlock() {
//     var divHolder = $("<div>")
//     .addClass("col-md-1 hour")
//     var textHolder = $("<textarea>")
//     .addClass("col-md-10 user-text")
//     var btnEl = $("<button>")
//     .addClass("saveBtn col-md-1")
//     var iEl = $("<i>")

//     divHolder.append(textHolder)
//     btnEl.append(iEl);


//     // containerEl.append(divHolder)


// }
// createBlock()
// console.log(createBlock)








// function hourTracker() {
//     //get current number of hours.
//     var currentHour = moment().hour();

//     $(".user-block").each(function () {
//         var blockHour = parseInt($(this).attr("id").split("hour")[1]);
//         console.log( blockHour, currentHour)

//         //check if we've moved past this time
//         if (blockHour < currentHour) {
//             $(this).addClass("past");
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//         }
//         else if (blockHour === currentHour) {
//             $(this).removeClass("past");
//             $(this).addClass("present");
//             $(this).removeClass("future");
//         }
//         else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");
//         }
//     })
// }







