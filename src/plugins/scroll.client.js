export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const scrollElements = document.querySelectorAll('[data-scroll-show]');

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          // if(entry.intersectionRatio > 0.4) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
          } else if (entry.boundingClientRect.y > 0) {
            entry.target.classList.remove('scroll-show');
          }
        });
      }, {
        threshold: 0.4
      }
    );

    scrollElements.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });
  })
});
