
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
$("#clock-13 .user-text").val(localStorage.getItem("clock-13"));
$("#clock-14 .user-text").val(localStorage.getItem("clock-14"));
$("#clock-15 .user-text").val(localStorage.getItem("clock-15"));
$("#clock-16 .user-text").val(localStorage.getItem("clock-16"));
$("#clock-17 .user-text").val(localStorage.getItem("clock-17"));
function schedualTracker() {
     // get current hour
     var currentHour = moment().hour();

     // loop over  user-block
     $(".user-block").each(function(){
         console.log()
         var timeBlock = 
         parseInt(
             $(this).attr("id").split("-").slice(1)
             )
         console.log(currentHour, timeBlock) 
         if (timeBlock < currentHour) {
             $(this).addClass("past");
         }
         else if (timeBlock === currentHour) {
             $(this).addClass("present");
         }
         else {
             $(this).addClass("future");
         }
 
     })
}
schedualTracker();
   
})




    










