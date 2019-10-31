$(document).ready(function () {
  $('.lazy').Lazy({
    // your configuration goes here
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
});

  $('.the-button, #navbarResponsive a').click(function () {
    $('.navbar').toggleClass('dark-bg');
    $('.the-button').toggleClass('rotate');
    $('#navbarResponsive').toggle('fast');
    $('#navbarResponsive .social-net, .left-side-flex .menu-text').toggleClass('d-none');
    $('nav').toggleClass("nav-open");
  });

  $('.booking .btn-dark, .right-side-button-flex, .row.main .btn.btn-primary').click(function () {
    $('.booking').fadeToggle('fast');
  });

  $('.booking .btn-dark').click(function () {
    $('.booking form ').trigger("reset");
  })
  $('.booking .form-container form').submit(function () {

    let date = $("#date").val();
    let month = date.split("/")[0];
    let day = date.split("/")[1];
    let time = $('#time').val();

    let currentDate = new Date();

    if (parseInt(month) > parseInt(currentDate.getMonth()) ) {
      $('.booking').fadeToggle('fast');
      $('.booking .form-container form').trigger("reset");
    }
    else if(parseInt(month) == parseInt(currentDate.getMonth()) && parseInt(day) >= parseInt(currentDate.getDate()) ){
      if (parseInt(time.split(':')[0]) >= (parseInt(currentDate.getHours()) + 2) && parseInt(time.split(':')[1]) >= parseInt(currentDate.getMinutes())) {
        $('.booking').fadeToggle('fast');
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


  $(".minus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if (oldValue == 2) return;
    var newVal = parseFloat(oldValue) - 1;
    $('form input[type=number]').val(newVal);
  });

  $(".plus").on("click", function () {
    var oldValue = $('form input[type=number]').val();
    if (oldValue === '') {
      $('form input[type=number]').val(1);
      return;
    }
    var newVal = parseFloat(oldValue) + 1;
    $('form input[type=number]').val(newVal);
  });

  $(".booking form .input-field input[type='number']").focus(function () {
    $('.booking .minus').css('border-color', '#b38a58');
  })

  $(".booking form .input-field input[type='number']").focusout(function () {
    $('.booking .minus').css('border-color', '#4c4c4c');
  })

  /* header carusel section */
  let nrImgHeader = $('.mask .carousel-inner > .carousel-item').length;

  /* setting the nr of img in the header */
  if(nrImgHeader < 10){
    $(".nr-img-header").text("0"+nrImgHeader);
  }
  else{
    $(".nr-img-header").text(nrImgHeader);
  }

  /* changing the snack bar each time img slides*/
  $(".mask .carousel").on('slid.bs.carousel', function () {
    $('.mask .carousel-inner').children('.carousel-item').each(function () {
      if ($(this).hasClass('active')) {
        let widthScrollBar = 40/nrImgHeader * ($(this).index() + 1);
        $('.fill').css('width', widthScrollBar + 'px');
      }
    });
  });
});





// Fetch the form element
var formBooking = document.getElementById("booking-form");

var formEmail = document.getElementById("email-form");

// Override the submit event
formBooking.addEventListener("submit", function (e) {
  e.preventDefault();

  if (grecaptcha) {
    let recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      return false;
    }
  }

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
  
  e.preventDefault();

  let request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    if (request.status === 302) { // CloudCannon redirects on success
      console.log("worked")
    }
  });

  request.open(formBooking.method, formBooking.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formBooking));
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

/* smooth scroll for arrow down button */
function moveToFirsBodySection() {
  document.querySelector('.first-body-section').scrollIntoView({
    behavior: 'smooth'
  });
}

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

/* instagram feed */

var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
    num_photos = 10,
    container = document.getElementById( 'social-net-img' ),
    scrElement = document.createElement( 'script' );
 
window.mishaProcessResult = function( data ) {
  let firstItem = true;
	for( x in data.data ){
    if(firstItem){
      container.innerHTML += '<div class="carousel-item active"><img class="item__img" src="' + data.data[x].images.low_resolution.url + '"></div>';
      firstItem = false;
    }
		container.innerHTML += '<div class="carousel-item"><img class="item__img" src="' + data.data[x].images.low_resolution.url + '"></div>';
	}
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );


