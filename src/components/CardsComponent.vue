<template>
  <div class="gab-app-container">
    <div class="gab-card" ref="gabCard">
      <h2>{{ activeTab }}</h2>
      <p ref="gabParagraph" class="gab-ubuntu-mono-regular">
        {{ tabContent }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsCards',
  props: {
    activeTab: {
      type: String,
      default: 'Mission'
    },
    tabContent: {
      type: String,
      default: `At ChuPurple, our mission is to foster a vibrant community of coding enthusiasts within the Pamantasan ng Lungsod ng Pasig (PLP) campus. We are dedicated to providing a supportive environment where students can enhance their coding skills, collaborate on innovative projects, and explore diverse opportunities in the field of technology.

Through our programs and activities, we aim to empower students to become proficient coders, critical thinkers, and effective problem solvers. We strive to cultivate a culture of continuous learning, creativity, and excellence in software development.

At ChuPurple, we are committed to promoting inclusivity, diversity, and teamwork. We believe in harnessing the collective talents and strengths of our members to tackle challenges and achieve success together.

Together, we aspire to make a positive impact in the PLP community and beyond, contributing to the advancement of technology and shaping the future of coding education.`
    }
  },
  mounted() {
    this.adjustCardWidth();
  },
  methods: {
    adjustCardWidth() {
      const paragraphWidth = this.$refs.gabParagraph.offsetWidth;
      this.$refs.gabCard.style.width = `${paragraphWidth + 40}px`;
    }
  },
  watch: {
    activeTab() {
      this.$nextTick(() => {
        this.adjustCardWidth();
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.gab-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.gab-card {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 18px;
  padding: 50px;
  background-color: #DDDBFF;
  max-width: 1200px;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.5); 


}

.gab-card h2 {
  font-family: "Archivo Black", sans-serif;
  margin-top: 0;
  color: #160326;
  font-size: 24px;
}

.gab-card p {
  margin: 0;
  color: #160326;
  font-size: 18px;
}

.gab-ubuntu-mono-regular {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
}

</style>
