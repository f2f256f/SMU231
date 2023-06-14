let scrollOption = {
  root: null,
  rootMargin: "200px",
  threshold: 0.5,
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
