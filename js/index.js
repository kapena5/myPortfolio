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