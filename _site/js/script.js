

/*rellax animation  */
var rellax = new Rellax('.rellax', {
  center: true
})

$(document).ready(function () {

  /* function to open and close the navigation bar  */
  $('.the-button, #navbarResponsive a').click(function () {
    $('.navbar').toggleClass('dark-bg');
    $('.the-button').toggleClass('rotate');
    $('#navbarResponsive').toggle('fast');
    $('#navbarResponsive .social-net, .left-side-flex .menu-text').toggleClass('d-none');
    $('nav').toggleClass("nav-open");
  });

  /* modal for reservation  */
  $('.booking .btn-dark, .right-side-button-flex, .row.main .btn.btn-primary').click(function () {
    $('.booking').fadeToggle('fast');
  });

  /*  modal for the confimation of subscription*/
  $('.sms-subscription .btn.btn-dark').click(function() {
    $('.sms-subscription').fadeToggle('fast');
  })

  /* modal for reservation confirmation */
  $('.reservation-confirmation .btn.btn-dark').click(function() {
    $('.reservation-confirmation').fadeToggle('fast');
  })

  /* function to reset the form if no reservation is made*/
  $('.booking .btn-dark').click(function () {
    $('.booking form ').trigger("reset");
  })

  /* term-privacy modal */

  $('.term-privacy-btn, .term-privacy-modal .btn-dark').click(function () {
    $('.term-privacy-modal').fadeToggle('fast');
  })

  /* validation of the resarvation  form */
  $('.booking .form-container form').submit(function () {

    let date = $("#date").val();
    let month = date.split("/")[0];
    let day = date.split("/")[1];
    let time = $('#time').val();

    let currentDate = new Date();

    if (parseInt(month) > parseInt(currentDate.getMonth())) {
      $('.reservation-confirmation').fadeToggle('fast');
      $('.booking').fadeToggle('slow');
      $('.booking .form-container form').trigger("reset");
    }
    else if (parseInt(month) == parseInt(currentDate.getMonth()) && parseInt(day) >= parseInt(currentDate.getDate())) {
      if (parseInt(time.split(':')[0]) >= (parseInt(currentDate.getHours()) + 2) && parseInt(time.split(':')[1]) >= parseInt(currentDate.getMinutes())) {
        $('.reservation-confirmation').fadeToggle('fast');
        $('.booking').fadeToggle('slow');
        $('.booking .form-container form').trigger("reset");
      }
      else {
        $('.sub-error').text('*Pleas book two hours in advance');
        $('.sub-error').removeClass('d-none');
        $(".booking").animate({ scrollTop: 0 }, "slow");
      }
    }
    else {
      $('.sub-error').text('*Pleas do not insert e previus date');
      $('.sub-error').removeClass('d-none');
      $(".booking").animate({ scrollTop: 0 }, "slow");
    }

  });

  /* to lower the number of guest in the resarvation form  */
  $(".minus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if (oldValue == 2) return;
    var newVal = parseFloat(oldValue) - 1;
    $('form input[type=number]').val(newVal);
  });

  /* to incres the number of guest in a resarvation form  */
  $(".plus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if (oldValue === '') {
      $('form input[type=number]').val(1);
      return;
    }
    var newVal = parseFloat(oldValue) + 1;
    $('form input[type=number]').val(newVal);
  });

  /* to change  the color of the border of the input on focus in the resarvaion form  */
  $(".booking form .input-field input[type='number']").focus(function () {
    $('.booking .minus').css('border-color', '#b38a58');
  })

  /* to change  the color of the border of the input on focus in the resarvaion form  */
  $(".booking form .input-field input[type='number']").focusout(function () {
    $('.booking .minus').css('border-color', '#4c4c4c');
  })

  /***************************************************/
  /* header carusel section */
  let nrImgHeader = $('.mask .carousel-inner > .carousel-item').length;

  /* setting the nr of img in the header */
  if (nrImgHeader < 10) {
    $(".nr-img-header").text("0" + nrImgHeader);
  }
  else {
    $(".nr-img-header").text(nrImgHeader);
  }

  /* changing the snack bar each time img slides*/
  $(".mask .carousel").on('slid.bs.carousel', function () {
    $('.mask .carousel-inner').children('.carousel-item').each(function () {
      if ($(this).hasClass('active')) {
        let widthScrollBar = 40 / nrImgHeader * ($(this).index() + 1);
        $('.fill').css('width', widthScrollBar + 'px');
      }
    });
  });

  /***************** end of the carusel  ********************** */


  /* resert the form on reload of the page  */
  window.addEventListener("beforeunload", function (event) {
    $('#email-form').trigger("reset");

    $('.booking .form-container form').trigger("reset");
  });

  // Fetch the form element


function getFormDataString(formEl) {
  var formData = new FormData(formEl),
    data = [];

  for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
  }

  return data.join("&");
}

var formBooking = document.getElementById("booking-form");

var formEmail = document.getElementById("email-form");

// Override the submit event
formBooking.addEventListener("submit", function (e) {
  e.preventDefault();


  let request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 302) { // CloudCannon redirects on success
    }
  });

  request.open(formBooking.method, formBooking.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formBooking));
});

// Override the submit event
formEmail.addEventListener("submit", function (e) {

  console.log("function called ok")
  e.preventDefault();

  let request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 302) { // CloudCannon redirects on success
      console.log("worked")
    }
  });

  request.open(formEmail.method, formEmail.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formEmail));
  $('.sms-subscription').fadeToggle('fast');
  $('#email-form').trigger("reset");
});


});

/* Fromating the date in the booking form  */
var date = document.getElementById('date');

function checkValue(str, max) {
  if (str.charAt(0) !== '0' || str == '00') {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
  };
  return str;
};

date.addEventListener('input', function (e) {
  this.type = 'text';
  var input = this.value;
  if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split('/').map(function (v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);
  var output = values.map(function (v, i) {
    return v.length == 2 && i < 1 ? v + ' / ' : v;
  });
  this.value = output.join('').substr(0, 14);
});

/* to format the time input */
var time = document.getElementById('time');

time.addEventListener('input', function (e) {
  this.type = 'text';
  var input = this.value;
  if (/\D\:$/.test(input)) input = input.substr(0, input.length - 3);
  var values = input.split(':').map(function (v) {
    return v.replace(/\D/g, '')
  });
  if (values[0]) values[0] = checkValue(values[0], 23);
  if (values[1]) values[1] = checkValue(values[1], 60);
  var output = values.map(function (v, i) {
    return v.length == 2 && i < 1 ? v + ' : ' : v;
  });
  this.value = output.join('').substr(0, 14);
});


/* smooth scroll for the navigation */
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











