
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
    // $('.the-button svg').toggleClass('d-none')
    $('.navbar').toggleClass('dark-bg');
    $('.the-button').toggleClass('rotate');
    $('#navbarResponsive').toggle('fast');
    // $('body').toggleClass('overflow-hidden');
  });
});


/* bacground slider */

// var indexBackgroundImg = 0;
// sliderBacgroundImg();

// function sliderBacgroundImg(){
//   var bacgroundImg = [
//     'url("C:/Users/Grei/Desktop/work/Resturant/Web page/img/restaurant.jpg")',
//     'url("C:/Users/Grei/Desktop/work/Resturant/Web page/img/restaurant2.jpg")',
//     'url("C:/Users/Grei/Desktop/work/Resturant/Web page/img/restaurant3.jpg")'
//   ];

//   for( let i = 0; i < 3; i++){

//     if(i == indexBackgroundImg){

//       document.getElementById('header').style.backgroundImage = bacgroundImg[i];
//       document.getElementById('header').classList.toggle("fade");
//       indexBackgroundImg++;
//       break;
//     }
//   }

//   if(indexBackgroundImg >= 3) indexBackgroundImg = 0 ;
//   setTimeout(sliderBacgroundImg, 2000);
// }

