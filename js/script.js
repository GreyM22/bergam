
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

  $('.booking .btn-dark, .right-side-button-flex, .row.main .btn.btn-primary').click(function () {
      $('.booking').fadeToggle('fast');
  });

  $('.booking .form-container form').submit(function () {

    let date = $("#date").val();
    let month = date.split("/")[0];
    let day = date.split("/")[1];
    let time = $('#time').val();

    let currentDate = new Date();

    if(parseInt(month) >= parseInt(currentDate.getMonth()) && parseInt(day) >= parseInt(currentDate.getDate())){
      
      if( parseInt(time.split(':')[0]) >= (parseInt(currentDate.getHours()) + 2) && parseInt(time.split(':')[1]) >= parseInt(currentDate.getMinutes()) ){
        $('.booking').fadeToggle('fast');
        $('.booking .form-container form').trigger("reset");
      }
      else{
        $('.sub-error').text('*Pleas book two hours in advance');
        $('.sub-error').removeClass('d-none');  
      }
    }
    else{
      $('.sub-error').text('*Pleas do not insert e previus date');
      $('.sub-error').removeClass('d-none');
    }

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

  $( ".booking form .input-field input[type='number']" ).focus(function(){
    $('.booking .minus').css('border-color', '#b38a58');
  })

  $( ".booking form .input-field input[type='number']" ).focusout(function(){
    $('.booking .minus').css('border-color', '#4c4c4c');
  })

  // $('#time').keydown(function(){
  //   let x = $('#time').val().length;
  //   if($('#time').val().length ==  2){
  //     $('#time').val( $('#time').val() + ":");
  //   }
  // })

});
