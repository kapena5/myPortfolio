//scroll animation for headers
gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 90%",
    end: "bottom 10%",
    // markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: -60, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -60, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});  

const scrollTime = 1000;
const offSet = 50;

//scroll to header after button click
$('.aboutLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.aboutHeader').offset().top - offSet
    }, scrollTime);
});
$('.skillsLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.skillsHeader').offset().top - offSet
    }, scrollTime);
});
$('.projectsLink').click(function() {
    $('html, body').animate({
        scrollTop: $('.projectsHeader').offset().top - offSet
      }, scrollTime);
});
$('.contactLink').click(function() {
  $('html, body').animate({
      scrollTop: $('.contactHeader').offset().top - offSet
    }, scrollTime);
});

//deactivate scroll if hambuger menu is expanded 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("stop-scrolling");
  document.body.addClass("fixed-position");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.classList.remove("stop-scrolling");
  document.body.removeClass("fixed-position");
}));