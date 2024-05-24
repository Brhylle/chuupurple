<template>
  <main class="bg-dark-background">
    <section class="">
      <div class="header ">Meet the Team.</div>
      <div class="footer" :class="{ 'blink': !anyHovered }">{{ additionalInfo }}</div>
      <div class="dlc-container">
        <div class="" :class="['dlc-indicator', { 'pulsate': !anyHovered }]" :style="{ left: indicatorLeft + 'px' }"></div>
        <div :class="['dlc-label', { 'blink': !anyHovered }]" :style="{ left: indicatorLeft + 'px' }">
          <span>{{ currentLabel }}</span>
        </div>
        
        <div class="dlc-gallery" @mousemove="updateIndicatorPosition" @mouseleave="resetGalleryItems">
          <div
            v-for="(item, index) in galleryItems"
            :key="index"
            class="dlc-gallery-item"
            :style="{ flex: item.isHovered ? hoveredItemFlex : defaultItemFlex }"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              :class="{ 'object-contain': item.isHovered, 'object-cover': !item.isHovered }"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        { src: require('../assets/imgs/hover-carousel/delacruz_pic.jpg'), alt: 'Leading Programmer 1', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/ventura_pic.jpg'), alt: 'Leading Programmer 2', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/tajarros_pic.jpg'), alt: 'Programmer 1', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/fortin_pic.jpg'), alt: 'Programmer 2', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/perez_pic.jpg'), alt: 'Programmer 3', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/semifrania_pic.jpg'), alt: 'Programmer 4', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/leomar_pic.jpg'), alt: 'Programmer 5', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/godes_pic.jpg'), alt: 'Programmer 6', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/magnaye_pic.jpg'), alt: 'Programmer 7', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/cruz_pic.jpg'), alt: 'Programmer 8', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/mirabel_pic.jpg'), alt: 'Programmer 9', isHovered: false },
      ],
      defaultItemFlex: '0 1 20px',
      hoveredItemFlex: '1 1 400px',
      indicatorLeft: 0,
      currentLabel: 'Hover over some pictures!',
      anyHovered: false,
      additionalInfo: 'Try hovering any pictures to learn more about the team!',
    };
  },
  methods: {
    handleMouseEnter(index) {
      this.galleryItems.forEach((item, i) => {
        item.isHovered = i === index;
      });
      this.currentLabel = this.galleryItems[index].alt;

      let $compareValue = this.galleryItems[index].alt;
      // sets or create another variable using alt.
      if (this.galleryItems[index].alt.includes('Leading')) {

        switch ($compareValue) {
          case 'Leading Programmer 1':
            this.additionalInfo = 'jheizon brhylle "gm" dela cruz'.toUpperCase();
            break;
            
          case 'Leading Programmer 2':
            this.additionalInfo = 'gabriel "gabe" ventura'.toUpperCase();
            break;
        
          default:
            this.additionalInfo = 'unexpected entry detected!'.toUpperCase();
            break;
        }
      } else {
        switch ($compareValue) {
          case 'Programmer 1':
            this.additionalInfo = 'ritchmond james "mondo" tajarros'.toUpperCase();
            break;
          case 'Programmer 2':
            this.additionalInfo = 'raven "veven" fortin'.toUpperCase();
            break;
          case 'Programmer 3':
            this.additionalInfo = 'joshua ezekiel "kel" perez'.toUpperCase();
            break;
          case 'Programmer 4':
            this.additionalInfo = 'joshua jehiel "saint ino" semifrania'.toUpperCase();
            break;
          case 'Programmer 5':
            this.additionalInfo = 'leomar "leo" tuazon'.toUpperCase();
            break;
          case 'Programmer 6':
            this.additionalInfo = 'paul adrian "malata" godes'.toUpperCase();
            break;
          case 'Programmer 7':
            this.additionalInfo = 'ace crizzler "eys" magnaye'.toUpperCase();
            break;
          case 'Programmer 8':
            this.additionalInfo = 'raven drake "ben" cruz'.toUpperCase();
            break;
          case 'Programmer 9':
            this.additionalInfo = 'robert leoni "bert" mirabel'.toUpperCase();
            break;
        
          default:
            this.additionalInfo = 'unexpected entry detected!';
            break;
        }
      }

      this.anyHovered = true;
    },
    handleMouseLeave() {
      this.anyHovered = false;
    },
    resetGalleryItems() {
      this.galleryItems.forEach(item => {
        item.isHovered = false;
      });

      // Reset to defaults
      this.anyHovered = false;
      this.currentLabel = 'Hover over some pictures!';
      this.additionalInfo = 'Try hovering any pictures to learn more about the team!'; 
    },
    updateIndicatorPosition(event) {
      const galleryContainer = this.$el.querySelector('.dlc-gallery');
      this.indicatorLeft = event.clientX - galleryContainer.getBoundingClientRect().left;
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  box-sizing: border-box;
}

main, section {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.dlc-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  transform-origin: center;
  width: 1000px;
  margin: 0 auto 0em auto;
  padding: 1em 0.5em;
  display: flex;
  justify-content: center;
}

.dlc-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: var(--primary-500);
}

.pulsate {
  animation: pulsate 1s infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(0.25);
    opacity: 0.5;
  }
  15% {
    transform: scale(0.5);
    opacity: 1;
  }
  30% {
    transform: scale(1);
    opacity: 1.5;
  }
  50% {
    transform: scale(2);
    opacity: 2;
  }
  70% {
    transform: scale(1);
    opacity: 1.5;
  }
  85% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(0.25);
    opacity: 0.5;
  }
}

.dlc-label {
  position: absolute;
  top: -40px; /* Adjust this value as needed to position the label at the top */
  left: 0;
  transform: translateX(-50%);
  background: rgba(103, 45, 210, 0.2);
  color: var(--text-200);
  padding: 5px 10px;
  border-radius: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
}

.blink {
  animation: blink 5s infinite;
}

@keyframes blink {
  0%, 50%, 100% {
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
}

.dlc-gallery {
  display: flex;
  justify-content: space-around;
  width: 100%;
  overflow: hidden;
}

.dlc-gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 20px;
  height: 400px;
  margin: 0 5px;
  background: #000;
  overflow: hidden;
  transition: flex 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border: 0.1em solid var(--accent-300);
}

.dlc-gallery-item img {
  width: 400px;
  height: 100%;
  transform: scale(2);
}

.object-contain {
  object-fit: contain;
}

.object-cover {
  object-fit: cover;
}

.footer {
  text-align: center;
  color: var(--text-200);
  font-size: 2em;
  font-family: "PP Neue Montreal Medium";
  margin: -3rem 5rem 0 0;
  z-index: 0;
  width: 100%
}

div.header {
  color: var(--primary-400);
  text-align: end;
  font-size: 10vw;
  font-family: "Humane SemiBold";
  margin: 0.5em 3.8em 0em 0em;
  text-transform: uppercase;
}
</style>