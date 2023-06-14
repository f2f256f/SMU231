let scrollOption = {
  root: null,
  rootMargin: "100px",
  threshold: 0.75,
};

let scrollFunction = (scrollTargets) => {
  scrollTargets.forEach((eachscrollTarget) => {
    if (eachscrollTarget.isIntersecting) {
      eachscrollTarget.target.classList.add("triggered");
    } else {
      eachscrollTarget.target.classList.remove("triggered");
    }
  });
};

let scroll = new IntersectionObserver(scrollFunction, scrollOption);

let elems = document.querySelectorAll(".animTrigger");

console.log(elems);

elems.forEach((eachElem) => {
  scroll.observe(eachElem);
});
