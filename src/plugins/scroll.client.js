export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          // if(entry.intersectionRatio > 0.4) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show");
          } else if (entry.boundingClientRect.y > 0) {
            entry.target.classList.remove("scroll-show");
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    setTimeout(() => {
      const scrollElements = document.querySelectorAll("[data-scroll-show]");

      scrollElements.forEach((item) => {
        if (item) {
          observer.observe(item);
        }
      });
    }, 0);
  });
});
