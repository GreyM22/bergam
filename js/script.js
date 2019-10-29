
function moveToFirsBodySection() {
  document.querySelector('.first-body-section').scrollIntoView({
    behavior: 'smooth'
  });
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {        // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function () {
  $('.the-button, #navbarResponsive a').click(function () {
    $('.navbar').toggleClass('dark-bg');
    $('.the-button').toggleClass('rotate');
    $('#navbarResponsive').toggle('fast');
    $('#navbarResponsive .social-net').toggleClass('d-none');
    $('nav').toggleClass("nav-open");
  });

  $('.email-form').submit(function () {
    $('.sms-subscription').removeClass('d-none');
    $('.sms-subscription').addClass('d-flex');
  });

  $('.sms-subscription .btn-dark').click(function () {
    $('.sms-subscription').fadeToggle(function () {
      $('.sms-subscription').addClass('d-none');
      $('.sms-subscription').removeClass('d-flex');
    });
  });

  $(".minus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if(oldValue == 0) return;
    var newVal = parseFloat(oldValue) - 1;
    $('form input[type=number]').val(newVal);
  });

  $(".plus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if(oldValue === '') {
      $('form input[type=number]').val(1);
      return;
    }
    var newVal = parseFloat(oldValue) + 1;
    $('form input[type=number]').val(newVal);
  });
  $('.right-side-button-flex').click(function(){
    $('body *').toggleClass('d-none');
    $('.booking').toggleClass('d-none');
  });

  $('.form-group.date').click( function(){
    $('.form-group.date').datepicker({
      format: 'mm/dd',
      calendarWeeks: true,
      todayHighlight: true,
      autoclose: true
    });  
    $(".datepicker-switch").attr("colspan", "5");
    $(".table-condensed").addClass('w-100');  
  });

});
