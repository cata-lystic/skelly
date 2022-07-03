$("document").ready(function() {

  // Scroll to top arrow
  $(window).scroll(function(){

      if ($(window).scrollTop() > 300){
        // show back to top
        $('#actionButton').css({opacity: 1})
      } else{
        // hide back to top
        $('#actionButton').css({opacity: 0})
      }

  })

})

// Click FAB to go to top of the page
$(document).on("click", "#actionButton, #brandText", function() {
    $('html, body').animate({ scrollTop: 0 }, 500)
});
