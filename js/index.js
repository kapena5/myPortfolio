$('.aboutLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.aboutHeader').offset().top - 50
    });
    $('.aboutHeader').animate({
      fontSize: "60px"
    }, "slow");
    $('.aboutHeader').animate({
      fontSize: "50px"
    }, "slow");
});
$('.skillsLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.skillsHeader').offset().top - 50
    });
    $('.skillsHeader').animate({
      fontSize: "60px"
    }, "slow");
    $('.skillsHeader').animate({
      fontSize: "50px"
    }, "slow");
});
$('.projectsLink').click(function() {
    $('html, body').animate({
        scrollTop: $('.projectsHeader').offset().top - 50
      });
      $('.projectsHeader').animate({
        fontSize: "60px"
      }, "slow");
      $('.projectsHeader').animate({
        fontSize: "50px"
      }, "slow");
});
$('.contactLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.contactHeader').offset().top - 50
    });
    $('.contactHeader').animate({
      fontSize: "60px"
    }, "slow");
    $('.contactHeader').animate({
      fontSize: "50px"
    }, "slow");
});
