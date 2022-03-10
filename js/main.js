$(document).ready(function() {
  $(".sticky_menu").waypoint(function(direction){
    if (direction == "down"){
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");
    }
});

  // magnificPopup js
    $('#magnific_video').magnificPopup({
        type:'inline',
        midClick:true
    });
    // Active link

    $("nav ul li a").click(function(){
      $("nav ul li a").removeClass("active");
      $(this).addClass("active");
  });

// SMOOTH Scroll FOR safari/IE/edge

  $("a").on('click',function(event){
      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html,body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          })
      }
  })
    mixitup(".mixer_image");
    
    $('.demo').infiniteslide();
  });

function openNav () {
    document.getElementById("myNav").style.width = "100%"
}
function closeNav () {
    document.getElementById("myNav").style.width = "0%"
}
  $(document).ready(function(){
    $('.slider').bxSlider();
  });
  $(document).ready( function() {
    $('#backTop').backTop({
    
      // the scroll position in px from the top
      'position' : 400,
    
      // scroll animation speed
      'speed' : 500,
    
      // red, white, black or green
      'color' : 'red',
    });
    });
