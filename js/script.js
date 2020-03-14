

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
  $('.sms-subscription .btn.btn-dark').click(function () {
    $('.sms-subscription').fadeToggle('fast');
  })

  /* modal for reservation confirmation */
  $('.reservation-confirmation .btn.btn-dark').click(function () {
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
  // $(".mask .carousel").on('slid.bs.carousel', function () {
  //   console.log("slid.bs.carousel working ");
  //   $('.mask .carousel-inner').children('.carousel-item').each(function () {
  //     console.log('.carousel-item');
  //     if ($(this).hasClass('active')) {
  //       console.log("nrImgHeader: " + nrImgHeader);
  //       console.log("$(this).index() + 1 ==  " + ($(this).index() + 1));
  //       let widthScrollBar = 40 / nrImgHeader * ($(this).index() + 1);
  //       $('.fill').css('width', widthScrollBar + 'px');
  //     }
  //   });
  // });
  $('#carousel-header').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
  });

  $('#carousel-header').bind('slid.bs.carousel', function (e) {
    console.log("slid event!");
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


  var formEmail = document.getElementById("email-form");

  // validating the form
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10)
    month = '0' + month.toString();
  if (day < 10)
    day = '0' + day.toString();

  var maxDate = year + '-' + month + '-' + day;
  $('#date').attr('min', maxDate);
  // Override the submit event

  let telInput = $("#phone");

  // initialize
  telInput.intlTelInput({
    initialCountry: 'auto',
    separateDialCode: true,
    preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
    autoPlaceholder: 'aggressive',
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
    geoIpLookup: function (callback) {
      fetch('https://api.ipdata.co/?api-key=a86af3a7a4a375bfa71f9259b5404149d1eabb74adcc275e4faf9dfe', {
        cache: 'reload'
      }).then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed: ' + response.status)
      }).then(ipjson => {
        callback(ipjson.country_code)
      }).catch(e => {
        callback('us')
      })
    }
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











