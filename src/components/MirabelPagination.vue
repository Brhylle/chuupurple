<template>
  <div id="MBLapp">
    <div class="MBLflex MBLspace-x-2">
      <button
        v-for="page in MBLtotalPages"
        :key="page"
        @click="MBLgoToPage(page)"
        :class="[
          'MBLpx-4 MBLpy-2 MBLrounded',
          MBLcurrentPage === page ? 'MBLbg-primary MBLtext-accent' : 'MBLbg-secondary MBLtext-text'
        ]"
        ref="cards"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'PaginationComponent',
  data() {
    return {
      MBLtotalPages: 10,
      MBLcurrentPage: 1
    };
  },
  methods: {
    MBLhandlePageChange(page) {
      this.MBLcurrentPage = page;
    },
    MBLgoToPage(page) {
      this.MBLhandlePageChange(page);
      this.$emit('MBLpage-changed', page);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.cards.forEach((card, index) => {
        gsap.from(card, {
          x: -100,
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.1, // Stagger the animation for each card
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 75%',
            scrub: false,
            markers: false, // Set to true for debugging
            toggleActions: 'play play reverse reverse',
          },
        });
      });
    });
  },
};
</script>

<style scoped>
#MBLapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-300);
  margin-top: 60px;
}

.MBLbg-primary {
  background-color: var(--primary-800);
}

.MBLtext-accent {
  color: var(--accent-100);
}

.MBLflex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.MBLspace-x-2 > :not(:first-child) {
  margin-left: 8px;
}

.MBLpx-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.MBLpy-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.MBLrounded {
  border-radius: 8px;
}

.MBLbg-secondary {
  background-color: var(--secondary-100);
}

.MBLtext-text {
  color: var(--text-700);
}
</style>
