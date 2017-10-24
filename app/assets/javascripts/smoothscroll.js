$(document).ready(function() {
  $('.slideButton').on('click', '#smooth', function(e) {
    $('html, body').animate({ scrollTop: $('#projects').offset().top });
    e.preventDefault();
  });

});
