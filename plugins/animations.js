import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default {
  install(app) {
    app.config.globalProperties.$gsap = gsap;
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
    app.config.globalProperties.$SplitType = SplitType;
    app.config.globalProperties.$Lenis = Lenis;
  }
};