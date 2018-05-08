$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior.
    // In your anchor if # has a value then
    if (this.hash !== "") {
      // Prevent default anchor click behavior which is skiping directly to the point
      event.preventDefault();

      // Store hash #
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // For the profile button
  $("#home button").click(function() {
      $('html,body').animate({
          scrollTop: $(".about").offset().top},
          'slow');
  });
  // For get in touch btn
  // $("#resume button").click(function() {
  //     $('html,body').animate({
  //         scrollTop: $(".contact").offset().top},
  //         'slow');
  // });

  // For headers to pop up on scroll
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 550) {
          $(this).addClass("slide");
        }
    });

  });

  // Animation for cover heading
  $("#heading").animate({
    top:'100px',opacity:'0.5'},'slow');


    // Animation for scroll down btn
    $(function(){
        loopDown();
    });

    function loopDown(){
        $("#down").animate({
            marginTop : 10
          },
            500, function() {
              loopUp();
         });
    }

    function loopUp(){
         $("#down").animate({
            marginTop : 0
          },
            500, function() {
              loopDown();
          });
    }



    // $(function(){
    //     loopUp2();
    // });
    //
    // function loopDown2(){
    //     $("#up").animate({
    //         marginTop : 10
    //       },
    //         500, function() {
    //           loopUp();
    //      });
    // }
    //
    // function loopUp2(){
    //      $("#up").animate({
    //         marginTop : 0
    //       },
    //         500, function() {
    //           loopDown();
    //       });
    // }
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          var vid = document.getElementById('video-background');
          vid.hide();
    }

});
  // For highlighting nav bar on scroll
  (function($) {
  $(document).ready(function() {
    var navChildren = $("#top li").children();
    var aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
          //how much you scrolled
        var windowPos = $(window).scrollTop();
          //size of browser window
        var windowHeight = $(window).height();
          //size of whole html doc
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
              //get the pos of top of div
            var secPosition = $(theID).offset().top;
            secPosition = secPosition - 135;
              // size of whole section
            var divHeight = $(theID).height();
            divHeight = divHeight + 90;
              // if how much scrolled >= pos of section and still within section height
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a[href='" + theID + "']").parent().addClass("active");
            } else {
                $("a[href='" + theID + "']").parent().removeClass("active");
            }
        }
      });

    });
  })(jQuery);

  // Show back to top BTn after scrolled a bit
  window.onscroll = function(){
    if(document.documentElement.scrollTop >= 10000)
    {
        document.getElementById('backTopBtn').style.visibility="visible"
    }
  };

  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});



function showbox(){
    var popup = document.getElementById("popup");
    var myBtn = document.getElementById("modalBtn");
    popup.style.display = "block";
}
function closebox(){
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
function showbox2(){
    var popup = document.getElementById("popup2");
    var myBtn = document.getElementById("modalBtn2");
    popup.style.display = "block";
}
function closebox2(){
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
}












  // For highlighting nav bar on scroll - NOT FUNCTIONAL
// (function(){
//   //offset = returns current pos of elem
//   //scrollTop returns how much you have scrolled
//
//   //get the pos of top of each div
//   var homeOffset = $('.main').offset().top;
//   var aboutOffset = $('.about').offset().top;
//   var resumeOffset = $('.resume').offset().top;
//   var projectsOffset = $('.projects').offset().top;
//   var contactOffset = $('.contact').offset().top;
//   $(document).ready(function(){
//     //how much you scrolled
//     var scrollTop = $(document).scrollTop;
//     var activeLi;
//     //if not on the about page then have to be on home page
//     if(scrollTop < aboutOffset){
//       activeLi = $('.navbar>li:nth-child(1)');
//     }
//     else if(scrollTop < resumeOffset){
//       activeLi = $('.navbar>li:nth-child(2)');
//     }
//     else{
//       activeLi = $('.navbar>li:nth-child(3)');
//     }
//     activeLi.addClass('active');
//     $('.navbar>li').not(activeLi).removeClass('active');
//   });
//
// });
