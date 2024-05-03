import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style/main.scss";
import gsap from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.to(".hero-video", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero-video--overlay",
    start: "top top",
    end: "+=700",
    scrub: 2,
  },
});
gsap.to(".hero-content", {
  opacity: 0,
  y: -80,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".hero-content",
    start: "center 20%",
    end: "+=200",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});

gsap.from(".usp-content--1", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".usp-content--1",
    start: "top 70%",
    end: "top top",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});
gsap.from(".usp-content--2", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".usp-content--2",
    start: "top 70%",
    end: "top top",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});
gsap.from(".usp-content--3", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".usp-content--3",
    start: "top 70%",
    end: "top top",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});
gsap.from(".usp-content--4", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".usp-content--4",
    start: "top 70%",
    end: "top top",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});
gsap.from(".prices-cards", {
  opacity: 0,
  y: 80,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".prices-cards",
    start: "top 70%",
    end: "top top",
    scrub: false,
    toggleActions: "play pause play reverse",
  },
});
ScrollTrigger.create({
  trigger: ".slider-2",
  start: "top 100%",
  end: "top 100%",
  endTrigger: "#next-section",
  scrub: true,
  onUpdate: (self) => {
    let scale = gsap.utils.mapRange(0, 1, 3.5, 1, self.progress);
    console.log(`progress ${self.progress} , scale:${scale}`);
    gsap.set(".slider-2", {
      scale,
    });

    gsap.to(".slider-1,.slider-3", {
      opacity: self.progress === 1 ? 1 : 0,
    });
    gsap.fromTo(
      ".slider-1",
      { x: -20 },
      {
        x: 0,
      }
    );
    gsap.fromTo(
      ".slider-3",
      { x: 20 },
      {
        x: 0,
      }
    );
    gsap.fromTo(
      ".marque-wrapper",
      { y: -20, opacity: 0 },
      {
        y:0 ,
        opacity: 1,
      }
    );
  },
});
