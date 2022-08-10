const bigFontSize = "50px";
const normalFontSize = "40px";
const transitionTime = "1300";

$('.aboutLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.aboutHeader').offset().top - 50
    });
    $('.aboutHeader').animate({
      fontSize: bigFontSize
    }, transitionTime);
    $('.aboutHeader').animate({
      fontSize: normalFontSize
    }, transitionTime);
});
$('.skillsLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.skillsHeader').offset().top - 50
    });
    $('.skillsHeader').animate({
      fontSize: bigFontSize
    }, transitionTime);
    $('.skillsHeader').animate({
      fontSize: normalFontSize
    }, transitionTime);
});
$('.projectsLink').click(function() {
    $('html, body').animate({
        scrollTop: $('.projectsHeader').offset().top - 50
      });
      $('.projectsHeader').animate({
        fontSize: bigFontSize
      }, transitionTime);
      $('.projectsHeader').animate({
        fontSize: normalFontSize
      }, transitionTime);
});
$('.contactLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.contactHeader').offset().top - 50
    });
    $('.contactHeader').animate({
      fontSize: bigFontSize
    }, transitionTime);
    $('.contactHeader').animate({
      fontSize: normalFontSize
    }, transitionTime);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("stop-scrolling");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("stop-scrolling");
}));

// if (navMenu.hasClass("active")) {
//   document.body.classList.add("stop-scrolling");
// } else {
//   document.body.classList.remove("stop-scrolling");

// }
