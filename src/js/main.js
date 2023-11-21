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

gsap.to(".para-ysa-bg", {
  scrollTrigger: {
    trigger: ".para-ysa-bg",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: -100,
});

gsap.to(".para-ysa-chara", {
  scrollTrigger: {
    trigger: ".para-ysa-chara",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 150,
});

gsap.from(".para-ysa-chara", {
  scrollTrigger: {
    trigger: ".para-ysa-chara",
    start: "bottom top",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 20,
});

gsap.from(".para-ysa-comic", {
  scrollTrigger: {
    trigger: ".para-ysa-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: -80,
});

gsap.to(".para-ysa-comic", {
  scrollTrigger: {
    trigger: ".para-ysa-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: 0,
});

gsap.to(".para-ysa-txt", {
  scrollTrigger: {
    trigger: ".para-ysa-txt",
    start: "top bottom",
    end: "bottom 80%",
    markers: true,
    scrub: true,
  },
  scale: 1.1,
});

gsap.to(".para-roi-bg", {
  scrollTrigger: {
    trigger: ".para-roi-bg",
    start: "50% bottom",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -30,
});

gsap.to(".para-roi-chara", {
  scrollTrigger: {
    trigger: ".para-roi-chara",
    start: "50% bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 100,
});

gsap.from(".para-roi-chara", {
  scrollTrigger: {
    trigger: ".para-roi-chara",
    start: "bottom top",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 20,
});

gsap.from(".para-roi-comic", {
  scrollTrigger: {
    trigger: ".para-roi-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: 80,
});

gsap.to(".para-roi-comic", {
  scrollTrigger: {
    trigger: ".para-roi-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: 0,
});

gsap.to(".para-roi-txt", {
  scrollTrigger: {
    trigger: ".para-roi-txt",
    start: "top bottom",
    end: "bottom 80%",
    markers: true,
    scrub: true,
  },
  scale: 1.1,
});

gsap.to(".para-epee-bg", {
  scrollTrigger: {
    trigger: ".para-epee-bg",
    start: "top bottom",
    end: "bottom bottom",
    markers: true,
    scrub: true,
  },
  y: -100,
});

gsap.to(".para-epee-chara", {
  scrollTrigger: {
    trigger: ".para-epee-chara",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 150,
});

gsap.from(".para-epee-chara", {
  scrollTrigger: {
    trigger: ".para-epee-chara",
    start: "bottom top",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  y: 20,
});

gsap.from(".para-epee-comic", {
  scrollTrigger: {
    trigger: ".para-epee-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: 80,
});

gsap.to(".para-epee-comic", {
  scrollTrigger: {
    trigger: ".para-epee-comic",
    start: "top bottom",
    end: "bottom top",
    markers: true,
    scrub: true,
  },
  x: 0,
});

gsap.to(".para-epee-txt", {
  scrollTrigger: {
    trigger: ".para-epee-txt",
    start: "top bottom",
    end: "bottom 80%",
    markers: true,
    scrub: true,
  },
  scale: 1.1,
});

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});

gsap.from(".ysa-horse", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=80%",
    end: "+=0%",
    markers: true,
    scrub: true,
  },
  y: "+=5%",
  x: "+=-5%",
  ease: "sine.inOut",
});

gsap.to(".ysa-horse", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=0%",
    end: "+=80%",
    markers: true,
    scrub: true,
  },
  y: "+=-3%",
  x: "+=3%",
  ease: "sine.inOut",
});

gsap.to(".ysa-txt", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=0%",
    end: "+=80%",
    markers: true,
    scrub: true,
  },
  scale: 1.07,
  ease: "sine.inOut",
});

gsap.from(".roi-mad", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=-80%",
    end: "+=0%",
    markers: true,
    scrub: true,
  },
  y: "+=5%",
  ease: "sine.inOut",
});

gsap.to(".roi-mad", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=100%",
    end: "+=100%",
    markers: true,
    scrub: true,
  },
  y: "+=-3%",
  ease: "sine.inOut",
});

gsap.from(".roi-mad", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=-80%",
    end: "+=0%",
    markers: true,
    scrub: true,
  },
  scale: 0.4,
  ease: "sine.inOut",
});

gsap.to(".roi-txt", {
  scrollTrigger: {
    trigger: ".slider-track",
    start: "+=100%",
    end: "+=100%",
    markers: true,
    scrub: true,
  },
  scale: 1.1,
  ease: "sine.inOut",
});
