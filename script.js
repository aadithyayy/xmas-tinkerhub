let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".front", 10, { y: -300 })
  .to(".mid", 10, { y: -200 }, "-=10")
  .fromTo(".back", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.getElementById("snowBtn").onclick = function () {
  snowFunction();
};
function snowFunction() {
  document.getElementById("snow").style.visibility = "visible";
  sleep(8000).then(() => {
    document.getElementById("snow").style.visibility = "hidden";
  });
}
