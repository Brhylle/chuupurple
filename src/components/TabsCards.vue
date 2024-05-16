<template>
  <div class="gab-app-container">
    <div class="gab-tabs">
      <div class="gab-tab-headers">
        <button :class="{ active: gabActiveTab === 'mission' }" @click="gabActiveTab = 'mission'" class="gab-archivo-black-regular">Mission</button>
        <button :class="{ active: gabActiveTab === 'vision' }" @click="gabActiveTab = 'vision'" class="gab-archivo-black-regular">Vision</button>
      </div>
      <div class="gab-tab-content">
        <div v-if="gabActiveTab === 'mission'" class="gab-card" ref="gabMissionCard">
          <h2>Mission</h2>
          <p ref="gabMissionParagraph" class="gab-ubuntu-mono-regular">At ChuPurple, our mission is to foster a vibrant community of coding enthusiasts within the Pamantasan ng Lungsod ng Pasig (PLP) campus. We are dedicated to providing a supportive environment where students can enhance their coding skills, collaborate on innovative projects, and explore diverse opportunities in the field of technology.<br><br>Through our programs and activities, we aim to empower students to become proficient coders, critical thinkers, and effective problem solvers. We strive to cultivate a culture of continuous learning, creativity, and excellence in software development.<br><br>At ChuPurple, we are committed to promoting inclusivity, diversity, and teamwork. We believe in harnessing the collective talents and strengths of our members to tackle challenges and achieve success together.<br><br>Together, we aspire to make a positive impact in the PLP community and beyond, contributing to the advancement of technology and shaping the future of coding education.</p>
        </div>
        <div v-if="gabActiveTab === 'vision'" class="gab-card" ref="gabVisionCard">
          <h2>Vision</h2>
          <p ref="gabVisionParagraph" class="gab-ubuntu-mono-regular">Our vision is to create a dynamic and innovative coding community within PLP, inspiring students to excel in technology and contribute to global advancements. We envision ChuPurple as a hub for creativity, collaboration, and growth, where students are empowered to unleash their full potential and lead transformative change in the digital world.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GabTabsComponent',
  data() {
    return {
      gabActiveTab: 'mission'
    };
  },
  mounted() {
    this.gabAdjustCardWidth();
  },
  methods: {
    gabAdjustCardWidth() {
      const gabParagraphWidth = this.gabActiveTab === 'mission' ? this.$refs.gabMissionParagraph.offsetWidth : this.$refs.gabVisionParagraph.offsetWidth;
     
      if (this.gabActiveTab === 'mission') {
        this.$refs.gabMissionCard.style.width = `${gabParagraphWidth + 40}px`;
      } else {
        this.$refs.gabVisionCard.style.width = `${gabParagraphWidth + 40}px`;
      }
    }
  },
  watch: {
    gabActiveTab() {
      this.$nextTick(() => {
        this.gabAdjustCardWidth();
      });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  background-color: #C0BADE; 
}

.gab-app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh; 
}

.gab-tabs {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #160326;
  border-radius: 8px;
}

.gab-tab-headers {
  display: flex;
  justify-content: center;
  margin-bottom: -10px;
}

.gab-tab-headers button {
  background-color: #CBA2DD; 
  border: none;
  color: #DDDBFF; 
  padding: 15px 30px; 
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 18px; 
}

.gab-tab-headers button.active {
  background-color: #29045D; 
}

.gab-tab-content {
  position: relative;
  display: flex;
  justify-content: center;
}

.gab-card {
  position: absolute;
  top: 60px; 
  left: 50%; 
  transform: translateX(-50%); 
  border: 3px solid #29045D; 
  border-radius: 18px 18px 18px 18px;
  box-shadow: 10px 14px 18px rgba(0, 0, 0, 0.1);
  padding: 50px; 
  background-color: #DDDBFF;
  max-width: 1200px; 
  width: 500%; 
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


.gab-archivo-black-regular {
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.gab-ubuntu-mono-regular {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 400;
  font-style: normal;
}

.gab-ubuntu-mono-bold {
  font-family: "Ubuntu Mono", monospace;
  font-weight: 700;
  font-style: normal;
}
</style>
