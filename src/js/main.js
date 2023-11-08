gsap.to(".para-title-portal", {
  scrollTrigger: {
    trigger: ".para-title-portal",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: 100,
});

gsap.to(".para-title-castle", {
  scrollTrigger: {
    trigger: ".para-title-castle",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -100,
});

gsap.to(".para-title-tree-r", {
  scrollTrigger: {
    trigger: ".para-title-tree-r",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -100,
});

gsap.to(".para-title-tree-l", {
  scrollTrigger: {
    trigger: ".para-title-tree-l",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -300,
});

gsap.to(".para-title-mid", {
  scrollTrigger: {
    trigger: ".para-title-mid",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -700,
});

gsap.to(".para-title-ysa", {
  scrollTrigger: {
    trigger: ".para-title-ysa",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -700,
});

gsap.to(".para-title-fore", {
  scrollTrigger: {
    trigger: ".para-title-fore",
    start: "top top",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -900,
});

gsap.from(".para-ysa-bg", {
  scrollTrigger: {
    trigger: ".para-ysa-bg",
    start: "bottom bottom",
    end: "top top",
    markers: true,
    scrub: true,
  },
  y: -50,
});

gsap.to(".para-ysa-bg", {
  scrollTrigger: {
    trigger: ".para-ysa-bg",
    start: "bottom bottom",
    end: "top top",
    markers: true,
    scrub: true,
  },
  y: 90,
});
