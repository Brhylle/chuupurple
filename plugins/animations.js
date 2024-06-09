import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { DrawSVGPlugin } from 'gsap';


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export default {
  install(app) {
    app.config.globalProperties.$gsap = gsap;
    app.config.globalProperties.$ScrollTrigger = ScrollTrigger;
    app.config.globalProperties.$SplitType = SplitType;
    app.config.globalProperties.$Lenis = Lenis;
    app.config.globalProperties.$DrawSVGPlugin = DrawSVGPlugin;
  }
};