/*  =============================================================================
    
    Copyright © Randy Truong
    ========================================================================== */

// When a dot in the nav section is clicked, move the slide to that specific slide
function goToClickedSlide(div) {
  disableButtonAnimations();
  ifScrollTransitioning = true;
  var divId = $(div).attr('id');
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();
  if (divId == 'dot-slide-1') {
    $('.pages-vertical').css('top', '0px');
    $('#dot-1').css('background-color', 'white');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'transparent');
    divWindowPositionY = 0;
  }
  else if (divId == 'dot-slide-2') {
    $('.pages-vertical').css('top', -screenHeight + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'white');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'transparent');
    divWindowPositionY = 1;
  }
  else if (divId == 'dot-slide-3') {
    $('.pages-vertical').css('top', (2 * -screenHeight) + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'white');
    $('#dot-4').css('background-color', 'transparent');
    divWindowPositionY = 2;
  }
  else if (divId == 'dot-slide-4') {
    $('.pages-vertical').css('top', (3 * -screenHeight) + 'px');
    $('#dot-1').css('background-color', 'transparent');
    $('#dot-2').css('background-color', 'transparent');
    $('#dot-3').css('background-color', 'transparent');
    $('#dot-4').css('background-color', 'white');
    divWindowPositionY = 3;
  }
}

// Change the colors of the dots depending on which dot is moved
function changeColorOfDotsForNav(dotNum, dotState) {
  var dotChosen = "#dot-" + (dotNum + 1);
  $(dotChosen).css('background-color', dotState);
}