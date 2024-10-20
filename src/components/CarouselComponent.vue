<template>
  <main class="bg-dark-background h-[0]">
    <section class="h-[0]">
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
        { src: require('../assets/imgs/hover-carousel/delacruz_pic.jpg'), alt: 'CEO', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/ventura.jpg'), alt: 'Leading Programmer 1', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/tajarros_pic.jpg'), alt: 'CyberOps Especialist', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/fortin_pic.jpg'), alt: 'Backend Developer', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/perez_pic.jpg'), alt: 'UI/UX Designer', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/semifrania_pic.jpg'), alt: 'Graphic Designer', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/leomar_pic.jpg'), alt: 'Data Analyst', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/godes_pic.jpg'), alt: 'Project Manager', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/magnaye_pic.jpg'), alt: 'Multimedia Director', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/cruz_pic.jpg'), alt: 'Technical Writer', isHovered: false },
        { src: require('../assets/imgs/hover-carousel/mirabel_pic.jpg'), alt: 'Art Director', isHovered: false },
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
            this.additionalInfo = 'gabriel ventura'.toUpperCase();
            break;
        
          default:
            this.additionalInfo = 'unexpected entry detected!'.toUpperCase();
            break;
        }
      } else {
        switch ($compareValue) {
          case 'CEO':
            this.additionalInfo = 'jheizon brhylle dela cruz'.toUpperCase();
            break;
          case 'CyberOps Especialist':
            this.additionalInfo = 'ritchmond james tajarros'.toUpperCase();
            break;
          case 'Backend Developer':
            this.additionalInfo = 'raven fortin'.toUpperCase();
            break;
          case 'UI/UX Designer':
            this.additionalInfo = 'joshua ezekiel perez'.toUpperCase();
            break;
          case 'Graphic Designer':
            this.additionalInfo = 'joshua jehiel semifrania'.toUpperCase();
            break;
          case 'Data Analyst':
            this.additionalInfo = 'leomar tuazon'.toUpperCase();
            break;
          case 'Project Manager':
            this.additionalInfo = 'paul adrian godes'.toUpperCase();
            break;
          case 'Multimedia Director':
            this.additionalInfo = 'ace crizzler magnaye'.toUpperCase();
            break;
          case 'Technical Writer':
            this.additionalInfo = 'raven drake cruz'.toUpperCase();
            break;
          case 'Art Director':
            this.additionalInfo = 'robert leoni mirabel'.toUpperCase();
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

/* main, section */

.dlc-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  transform-origin: center;
  width: 100%;
  margin: 0 auto 0em auto;
  padding: 1em 0.5em;
  display: flex;
  justify-content: center;
}

/* dot */
.dlc-indicator {
  position: absolute;
  top: 32.5%;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  background: var(--primary-500);
}
/* label sa taas ng dot */
.dlc-label {
  position: absolute;
  /* top: 30%; */ /* top */
  top: 67%;
  left: 0;
  transform: translateX(-50%);
  background: var(--transparent-200);
  color: var(--text-200);
  padding: 5px 10px;
  border-radius: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
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
  width: 85%;
  overflow: hidden;
}

.dlc-gallery-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 20px;
  height: 400px;
  margin: 400px 5px;
  background: var(--background-900);
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
  width: 100%;
}

div.header {
  color: var(--primary-400);
  text-align: center;
  font-size: 10vw;
  font-family: "Humane SemiBold";
  margin: 0 0em 0em 0em;
  text-transform: uppercase;
}
</style>