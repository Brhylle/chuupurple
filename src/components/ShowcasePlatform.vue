<template>
    <main>
        <section>
            <div class="dlc-container">
                
                <section class="dlc-sticky" ref="sticky">
                    <nav>
                        <div class="dlc-logo">
                            <a href="#">Purple</a>
                        </div>
                        <div class="dlc-links">
                            <a href="#our-team" id="">Our Team</a>
                            <a href="#section-header">Components</a>
                            <DarkToggleMode class="dark-mode"></DarkToggleMode>
                        </div>
                    </nav>

                    <h5 class="dlc-sub-logo">× presents</h5>

                    <div class="dlc-header" >
                        <h1 class="animated-header-1">purple</h1>
                    </div>
                    
                    <div class="dlc-badge-container">
                        <h2 class="dlc-badge-name">chuu</h2>
                        <img src="../assets/chuu-light-badge.svg" alt="chuupurple">
                    </div>

                    <div class="dlc-tracker" ref="tracker">
                        <div class="dlc-emoji" ref="emoji">
                            <div class="dlc-emoji-face" ref="emojiFace">
                                <div class="dlc-eyes">
                                    <svg width="106" height="104" viewBox="0 0 106 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z" fill="black"/>
                                    </svg>
                                    <svg width="106" height="104" viewBox="0 0 106 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="dlc-mouth-wrapper">
                                <div class="dlc-mouth"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="dlc-platform-content" ref="websiteContent">
                    <div class="dlc-section-header">
                        <h1 class="animated-text-1"><span class="animated-emphasization-2">Components</span> Crafted By...</h1>
                        <p class="animated-text-1">These components, <span class="animated-emphasization-2">lovingly created</span> by the team, beckon you to delve into a realm brimming with creativity and innovation. Embark on a journey of exploration filled with happiness and excitement, and <span class="animated-emphasization-2">uncover the enchantment</span> meticulously woven into every <span class="animated-emphasization-2">intricate detail</span>.</p>
                    </div>

                    <!-- * GAB components should be injected here * -->
                    <div class="uniform-container">
                        <h2 class="presenter-header" id="animated-text-2"><span class="animated-emphasization">Gabriel</span> Ventura,</h2>
                            <h4 class="component-name" id="animated-text-5"><span class="animated-emphasization">Tabs</span> Component & <span class="animated-emphasization">Search Bar</span> Component 1</h4>
                                <div class="component-row">
                                    <div class="component-left">
                                        <TabsComponent/>
                                    </div>
                                    <div class="component-right">
                                        <SearchBarComponent class="search-bar-wrapper"/>
                                    </div>
                                </div>
                        
                            <div class="component-card-container">
                                <h4 class="component-name" id="animated-text-3"><span class="animated-emphasization">Cards</span> Component</h4>
                                <CardsComponent/>
                            </div>
                    </div>

                    <!-- * MRBL components should be injected here * -->

                    <div class="uniform-container">
                        <h2 class="presenter-header" id="animated-text-2"><span class="animated-emphasization">Mirabel</span> Robert Leoni,</h2>
                        
                        <MirabelAccordion/>
                        <MirabelProgressBar/>
                        <MirabelPagination/>
                    </div>



                    <!-- * FRTN components should be injected here * -->
                    <div class="uniform-container">
                        <Fortin_NumberInput/>
                        <Fortin_Textarea/>
                        <Fortin_Tooltip/>
                    </div>
                </section>

            </div>
        </section>
    </main>
</template>

<script>
import DarkToggleMode from './DarkToggleMode.vue';
// import CarouselComponent from './CarouselComponent.vue';
import TabsComponent from './TabsComponent.vue';
import CardsComponent from './CardsComponent.vue';
// import CruzNotification from './CruzNotification.vue';
// import CruzPopup from './CruzPopup.vue';
import Fortin_NumberInput from './Fortin_NumberInput.vue';
import Fortin_Textarea from './Fortin_Textarea.vue';
import Fortin_Tooltip from './Fortin_Tooltip.vue';
import MirabelAccordion from './MirabelAccordion.vue';
import MirabelProgressBar from './MirabelProgressBar.vue';
import MirabelPagination from './MirabelPagination.vue';
import SearchBarComponent from './SearchBarComponent.vue';

export default {
  components: {
    DarkToggleMode,
    // CarouselComponent,
    TabsComponent,
    CardsComponent,
    SearchBarComponent,
    // CruzNotification,
    // CruzPopup,
    Fortin_NumberInput,
    Fortin_Textarea,
    Fortin_Tooltip,
    MirabelAccordion,
    MirabelPagination,
    MirabelProgressBar,
  },
  mounted() {
    // Animation for the first section of the showcase
const splitHeader = document.querySelectorAll('.animated-header-1');
splitHeader.forEach((char) => {
  const splitText = new this.$SplitType(char, { types: 'chars' });
  this.$gsap.to(splitText.chars, {
    scrollTrigger: {
      trigger: char,
      start: '50% 25%',
      end: '100% 25%',
      scrub: true,
      markers: false,
    },
    opacity: 0.05,
    y: 95,
    stagger: 0.1,
  });
});

// Animation for the second section of the showcase
const splitTypeOne = document.querySelectorAll('.animated-text-1');
splitTypeOne.forEach((char) => {
  const splitText = new this.$SplitType(char, { types: 'chars' });
  this.$gsap.from(splitText.chars, {
    scrollTrigger: {
      trigger: char,
      start: 'top 200%', // Adjusted start position
      end: 'top 95%',   // Adjusted end position
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

// * FIRST PRESENTER - GAB
const splitTypeTwo = document.querySelectorAll('#animated-text-2');
splitTypeTwo.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
    this.$gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 120%', // Adjusted start position
        end: 'top 75%',   // Adjusted end position
        scrub: true,
        markers: false,
      },
        opacity: 0,
        stagger: 1,
        y: 1920,
        ease: 'power3.out',
    });
  });

  const splitTypeThree = document.querySelectorAll('#animated-text-3');
  splitTypeThree.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 120%', // Adjusted start position
          end: 'top 75%',   // Adjusted end position
          scrub: false,
          markers: false,
        },
          opacity: 0,
          stagger: 0.1,
          z: 100,
          ease: 'power3.in',
          toggleActions: 'play play reverse reverse',
      });
  });

const splitTypeFour = document.querySelectorAll('#animated-text-4');
  splitTypeFour.forEach((char) => {
    const splitText = new this.$SplitType(char, { types: 'chars' });
      this.$gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: char,
          start: 'top 90%', // Adjusted start position
          end: 'top 75%',   // Adjusted end position
          scrub: false,
          markers: false,
        },
        opacity: 0,
        x: -240,
        ease: 'power3.in',
        stagger: 0.5,
        toggleActions: 'play play reverse reverse',
      });
  });

  const emphasisAnimation = document.querySelectorAll('.animated-emphasization');
  emphasisAnimation.forEach((char) => {
      const splitText = new this.$SplitType(char, { types: 'chars' });
    
    // Get the computed background color from CSS
    const fgColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-600');

    // Get the computed foreground color from CSS
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--text-400');


      this.$gsap.fromTo(splitText.chars, {
        color: bgColor,
      },
    {
        color: fgColor,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
            trigger: char,
            start: 'top 100%',
            end: 'top 95%',
            scrub: false,
            markers: false,
            toggleActions: 'play play reverse reverse',
            
        }        
  });
  });

const splitTypeFive = document.querySelectorAll('#animated-text-5');
splitTypeFive.forEach((char) => {
  const splitText = new this.$SplitType(char, { types: 'chars' });
    this.$gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 110%', // Adjusted start position
        end: 'top 85%',   // Adjusted end position
        scrub: true,
        markers: false,
      },
      scaleY: 0,
      y: -20,
      transformOrigin: 'top',
        stagger: 0.1,
    });
});

// Add a delay before animating the next container
this.$gsap.from(".component-left", {
    opacity: 0,
    x: -50,
    scrollTrigger: {
        trigger: ".component-left",
        start: "top 150%", // Adjust according to your needs
        end: "bottom 100%", // Adjust according to your needs
        scrub: true,
        markers: false,
    },
});

// Add a delay before animating the next container
this.$gsap.from(".component-right", {
    opacity: 0,
    y: -50,
    scrollTrigger: {
        trigger: ".component-left",
        start: `top 150%`, // Adjust according to your needs
        end: `bottom 90%`, // Adjust according to your needs
        scrub: true,
        markers: false,
    },
});

// Add a delay before animating the next container
this.$gsap.from(".component-card-container", {
    opacity: 0,
    x: 50,
    scrollTrigger: {
        trigger: ".component-left",
        start: `top 150%`, // Adjust according to your needs
        end: `bottom 80%`, // Adjust according to your needs
        scrub: true,
        markers: false,
    },
});

// GSAP animation for sticky section
this.$gsap.to('.dlc-sticky', {
  scrollTrigger: {
    trigger: '.dlc-sticky',
    start: 'top top',
    end: () => '+=' + (window.innerHeight + this.$refs.websiteContent.offsetHeight * 0.5),
    scrub: 1,
    pin: true,
  },
  y: 250,
  scale: 0.50,
  rotation: -15,
  ease: 'power3.out',
});

// GSAP animation for website content
this.$gsap.fromTo(
  '.dlc-platform-content',
  {
    x: -100,
    scale: 0.3,
    rotation: 15,
  },
  {
    scrollTrigger: {
      trigger: '.dlc-platform-content',
      start: 'top 250%', // Adjusted start position
      end: 'top 40%',   // Adjusted end position
      scrub: true,
    },
    x: 0,
    scale: 1,
        rotation: 0,
    ease: 'power3.out',
    duration: 2,        // Increased duration
  }
);

// Mousemove event handling
const wrapper = this.$refs.tracker;
const emoji = this.$refs.emoji;
const emojiFace = this.$refs.emojiFace;

const moveEvent = (e) => {
  const wrapperRect = wrapper.getBoundingClientRect();
  const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
  const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);

  const emojiMaxDisplacement = 50;
  const emojiFaceMaxDisplacement = 75;

  const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
  const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

  const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
  const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

  this.$gsap.to(emoji, {
    x: emojiDisplacementX,
    y: emojiDisplacementY,
    ease: 'power3.out',
    duration: 0.35,
  });

  this.$gsap.to(emojiFace, {
    x: emojiFaceDisplacementX,
    y: emojiFaceDisplacementY,
    ease: 'power3.out',
    duration: 0.35,
  });
};

const leaveEvent = () => {
  this.$gsap.to([emoji, emojiFace], {
    x: 0,
    y: 0,
    ease: 'power3.out',
    duration: 1,
  });
};

wrapper.addEventListener('mousemove', moveEvent);
wrapper.addEventListener('mouseleave', leaveEvent);

// Initialize Lenis for smooth scrolling
this.$lenis = new this.$Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

const raf = (time) => {
  this.$lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
  },
  beforeUnmount() {
    if (this.$lenis) {
      this.$lenis.destroy();
    }
  },
};
</script>

<style scoped>

.component-card-container {
    padding: 1rem;
}

.component-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.component-left, .component-right, .component-card-container {
    border: solid;
  border-width: 0.33rem;
}

.component-left {
  flex: 1;
  margin-right: 1rem;
  padding: 2rem;
}

.component-right {
  flex: 1;
  margin-left: 1rem;
  display: flex;
  justify-content: flex-end;
  padding: 1.33rem;
}

.search-bar-wrapper {
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  position: relative;
}

.component-name {
    font-family: "PP Neue Montreal Bold";
    font-size: 3rem;
    line-height: 1.1;
    color: var(--text-400);
    text-align: center;
}

.presenter-header {
    font-family: "Humane Bold", sans-serif;
    font-size: 10rem;
    line-height: 1.1;
    color: var(--text-400);
    text-align: center;
}

/* SEGREGATED COMPONENT CSS CONTAINERS */
.uniform-container {
    margin: 5rem;
    border: solid 0.63rem var(--accent-300);
    border-radius: 2rem;
    padding: 2rem;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.dlc-container {
    width: 100%;
    height: 100%;
    display: flex;
}

section.dlc-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--background-200);
}

nav {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}

.dlc-logo a {
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Humane Bold", sans-serif;
    font-size: 60px;
    color: var(--primary-900);
}

.dlc-sub-logo {
    color: var(--text-600);
    margin: 92px 0 0 34px;
}

.dlc-links {
    display: flex;
    align-items: center;
    gap: 1em;
}

.dlc-links a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1em;
    font-size: 13px;
    color: var(--text-700);
    border: 1px solid var(--accent-900);
    border-radius: 20px;
}

.dlc-links a:hover {
    color: var(--text-50);
    background: var(--secondary-800);
}

.dlc-header {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* MAKE THE TEXT RESPONSIVE BY USING MEDIA QUERY? */
.dlc-header h1 {
    text-transform: uppercase;
    font-family: Humane SemiBold;
    font-size: 42vw;
    font-weight: 400;
    color: var(--text-700);
    line-height: 100%;
}

.dlc-badge-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(95%, 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 0;

}

.dlc-badge-container img {
    width: 240px;
    height: auto;
    animation: rotateBadge 15s infinite linear;
}

.dlc-badge-name {
    position: absolute;
    color: var(--primary-950);
    font-family: "Humane SemiBold", sans-serif;
    font-size: 5em;
    text-transform: uppercase;
    z-index: 1;
    margin: 0.8em;
}

section.dlc-platform-content {
    position: absolute;
    top: 100vh;
    width: 100%;
    height: 300vh;
    background: var(--background-900);
    padding: 6em;
}

.dlc-tracker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 2em 0;
}

.dlc-emoji {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: url('../assets/emoji-light.png') no-repeat 50% 50%;
    background-size: cover;
    border-radius: 100%;
}

[data-theme="dark"] .dlc-emoji {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: url('../assets/emoji-dark.png') no-repeat 50% 50%;
    background-size: cover;
    border-radius: 100%;
}

.dlc-emoji-face {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 225px;
    height: 200px;
    display: flex;
    flex-direction: column;

}

.dlc-eyes, .dlc-mouth-wrapper {
    flex: 1;
}

.dlc-eyes {
    display: flex;
    justify-content: space-around;
}

.dlc-eyes svg {
    width: 75px;
    height: 75px;
    animation: rotateEyes 4s infinite linear;
}

.dlc-eyes svg path {
    fill: var(--secondary-900);
}

.dlc-mouth-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.dlc-mouth {
    width: 40px;
    height: 40px;
    margin-top: 10rem;
    border-radius: 50px;
    background: var(--secondary-900);
    animation: wonderFace 2s infinite cubic-bezier(0.075, 0.82, 0.165, 1);
}

.dlc-section-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
}

.dlc-section-header h1 {
    font-family: "Humane SemiBold";
    font-size: 10vw;
    font-weight: 400;
    color: var(--primary-400);
    line-height: 100%;
    text-transform: uppercase;
}

.dlc-section-header p {
    color: var(--text-400);
    font-size: 13px;
    text-transform: uppercase;
    text-align: right;
    width: 25%;
}

.dlc-row {
    display: flex;
    gap: 2em;
    margin: 2em 0;

}

.dlc-row img {
    height: 600px;
}



/* ANIMATIONS */

@keyframes rotateEyes {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes wonderFace {
    0% {height: 40px;}
    50% {height: 80px;}
    100% {height: 40px;}
}

@keyframes rotateBadge {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>