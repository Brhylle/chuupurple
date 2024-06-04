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

                    <div class="dlc-sub-logo mt-24 ml-5">
                        <h5 class="pt-24">by team purple</h5>
                    </div>

                    <div class="dlc-header">
                        <h1>purple</h1>
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
                        <h1 class="reveal-type">Components Crafted By Us.</h1>
                        <p class="reveal-type">These components, lovingly created by the team, beckon you to delve into a realm brimming with creativity and innovation. Embark on a journey of exploration filled with happiness and excitement, and uncover the enchantment meticulously woven into every intricate detail.</p>
                    </div>

                    <!-- * GAB components should be injected here * -->
                    <div>
                        <TabsComponent/>
                        <CardsComponent/>
                    </div>

                    <!-- * GMB components should be injected here * -->
                    <div>
                        <CarouselComponent id="our-team"/>
                    </div>

                    <!-- * RDC components should be injected here * -->
                    <div>
                        <CruzNotification/>
                        <CruzPopup/>
                    </div>

                    <div>
                        <MirabelAccordion/>
                        <MirabelProgressBar/>
                        <MirabelPagination/>
                    </div>



                    <!-- * FRTN components should be injected here * -->
                    <div>
                        <Fortin_NumberInput/>
                        <Fortin_Textarea/>
                        <Fortin_Tooltip/>
                    </div>
                </section>

            </div>
        </section>
    </main>
</template>

<script> // never put any script here, refactor your code first.
// LAHAT NG PLUGIN IMPORTS DITO
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// LAHAT NG COMPONENT IMPORTS DITO
import DarkToggleMode from './DarkToggleMode.vue';
import CarouselComponent from './CarouselComponent.vue';
import TabsComponent from './TabsComponent.vue';
import CardsComponent from './CardsComponent.vue';
import CruzNotification from './CruzNotification.vue';
import CruzPopup from './CruzPopup.vue';
import Fortin_NumberInput from './Fortin_NumberInput.vue';
import Fortin_Textarea from './Fortin_Textarea.vue';
import Fortin_Tooltip from './Fortin_Tooltip.vue';
import MirabelAccordion from './MirabelAccordion.vue';
import MirabelProgressBar from './MirabelProgressBar.vue';
import MirabelPagination from './MirabelPagination.vue';

export default {

    components: {
        DarkToggleMode,
        CarouselComponent,
        TabsComponent,
        CardsComponent,
        CruzNotification,
        CruzPopup,
        Fortin_NumberInput,
        Fortin_Textarea,
        Fortin_Tooltip,
        MirabelAccordion,
        MirabelPagination,
        MirabelProgressBar,
    },
    mounted() {
        // GSAP ScrollTrigger initialization
        gsap.registerPlugin(ScrollTrigger);

        // GSAP animation for sticky section
        gsap.to(".dlc-sticky", {
        scrollTrigger: {
            trigger: ".dlc-sticky",
            start: "top top",
            end: () =>
            "+=" +
            (window.innerHeight +
                this.$refs.websiteContent.offsetHeight * 0.5),
            scrub: 1,
            pin: true,
        },
        y: 250,
        scale: 0.75,
        rotation: -15,
        ease: "power3.out",
        });

        // GSAP animation for website content
        gsap.fromTo(
        ".dlc-platform-content",
        {
            x: -100,
            scale: 0.3,
            rotation: 15,
        },
        {
            scrollTrigger: {
            trigger: ".dlc-platform-content",
            start: "top 200%",
            end: "top 50%",
            scrub: true,
            },
            x: 0,
            scale: 1,
            rotation: 0,
            ease: "power3.out",
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

            // emoji max displacement
            const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
            const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;

            // face of emoji max displacement
            const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
            const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement;

            gsap.to(emoji, {
                x: emojiDisplacementX,
                y: emojiDisplacementY,
                ease: "power3.out",
                duration: 0.35,
            });

            gsap.to(emojiFace, {
                x: emojiFaceDisplacementX,
                y: emojiFaceDisplacementY,
                ease: "power3.out",
                duration: 0.35,
            });
        };

        const leaveEvent = () => {
            gsap.to([emoji, emojiFace], {
                x: 0,
                y: 0,
                ease: "power3.out",
                duration: 1,
            });
        };
        wrapper.addEventListener("mousemove", moveEvent);
        wrapper.addEventListener("mouseleave", leaveEvent);
    },
    beforeUnmount() {
        if (this.$$lenis) { 
            this.$lenis.destroy();
        }
        
    },
}
</script>

<style scoped>

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
    font-size: 45vw;
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
    padding: 6em 2em;
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