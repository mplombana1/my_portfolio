$(document).ready(function() {
  $('.slideButton').on('click', '#smooth', function(e) {

    var linkHref = $(this)

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top



    });





    e.preventDefault();
  });

});
