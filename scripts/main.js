$(function() {
  function loadImages(images) {
    $(images).each(function() {
      new Image().src = this;
    });
  }

  loadImages([
    "/assets/AUFC.svg",
    "/assets/Braves.svg",
    "/assets/THFC.svg",
    "/assets/UGA.svg"
  ]);

  $(".pop").hover(function() {
    $(this).addClass("popped");
  });

  $(".pop").focus(function() {
    $(this).addClass("popped");
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 500,
    scale: 1,
    viewFactor: 0.3,
    easing: "cubic-bezier(0.7,0,0.3,1)"
  });

  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience");
  sr.reveal(".projects");
});
