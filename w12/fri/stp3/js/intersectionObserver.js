let observerOption = {
  root: null,
  rootMargin: "100px",
  threshold: 0.75,
};

let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// for(let idx = 0; idx < elems. length; idx++) {
//     observer.observe(elems[idx]);
// }
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
