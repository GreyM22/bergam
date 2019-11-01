/* instagram feed */

var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
    num_photos = 10,
    container = document.getElementById( 'social-net-img' ),
    scrElement = document.createElement( 'script' );
    scripSRC = document.querySelectorAll('[src="js/script.js"]')[0];
 
    
window.mishaProcessResult = function( data ) {
  let firstItem = true;
	for( x in data.data ){
    if(firstItem){
      container.innerHTML += '<div class="carousel-item active"><img class="lazy"  src="img/placeholder.jpg" data-src="' + data.data[x].images.low_resolution.url + '"></div>';
      firstItem = false;
    }
		container.innerHTML += '<div class="carousel-item"><img class="lazy"  src="img/placeholder.jpg" data-src="'+ data.data[x].images.low_resolution.url + '"></div>';
  }
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.insertBefore( scrElement, scripSRC);

document.addEventListener("DOMContentLoaded", function(){
  yall({
    observeChanges: true
  })
});

