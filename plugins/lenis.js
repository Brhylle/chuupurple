import Lenis from '@studio-freight/lenis';

export default {
  install(app) {
    const lenis = new Lenis();

    // Make Lenis available globally
    app.config.globalProperties.$lenis = lenis;

    // Initialize Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  },
};