<!-- TuazonDialog.vue -->
<template>
  <div class="flex justify-center items-center">
    <button class="check-button" @click="showDialog">{{ buttonText }}</button>

    <div v-if="dialogVisible" class="dialog-overlay">
      <div class="dialog background-color">
        <div class="dialog-header">
          <h2>Chuupurple Department</h2>
        </div>
        <div class="dialog-body">
          <ul id="leo-app-container">
            <li v-for="(name, index) in names" :key="index" class="list-item">
              {{ name }}
            </li>
          </ul>
        </div>
        <div class="dialog-footer">
          <button class="close-button" @click="closeDialog">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuazonDialog',
  props: {
    names: {
      type: Array,
      default: () => [
        "Cruz, Raven Drake C.", "Dela Cruz, Jheizon Brhylle P.", "Fortin, Raven F.",
        "Godes, Paul Adrian L.", "Magnaye, Ace Crizller T.", "Mirabel, Robert Leoni F.",
        "Perez, Joshua Ezekiel E.", "Semifrania, Joshua Jehiel M.",
        "Tajarros, Ritchmond James S.", "Tuazon, Leomar A.", "Ventura, Gabriel D."
      ]
    }
  },
  data() {
    return {
      dialogVisible: false,
      buttonText: 'Show Names'
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
      this.buttonText = 'Hide Names';
    },
    closeDialog() {
      this.dialogVisible = false;
      this.buttonText = 'Show Names';
    }
  }
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 80%;
}

.background-color {
  background-color: #95cee5;
}

.dialog-header h2 {
  margin: 0;
  color: #160326;
}

.dialog-body {
  margin-top: 10px;
  text-align: left;
}

.dialog-footer {
  margin-top: 20px;
  text-align: right;
}

.check-button,
.close-button {
  background-color: #CBA2DD;
  color: #0b2250;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.check-button:hover,
.close-button:hover {
  background-color: #373565;
}
</style>