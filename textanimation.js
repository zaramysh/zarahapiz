gsap.config({ trialWarn: false });
console.clear();
gsap.registerPlugin(ScrollTrigger, SplitText);
const split = new SplitText("p", { type: "lines" });

split.lines.forEach((target) => {
  gsap.to(target, {
    backgroundPositionX: 0,
    ease: "none",
    scrollTrigger: {
      trigger: target,
      markers: false,
      scrub: 1,
      start: "top 80%",
      end: "bottom 60%"
    }
  });
});