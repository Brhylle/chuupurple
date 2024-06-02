<template>
  <div id="JJMS_app">
    <button @click="JJMS_openBottomSheet">Open Feedback Form</button>
    <div class="JJMS_bottom-sheet" :class="{ open: JJMS_isOpen }" v-show="JJMS_isOpen" aria-modal="true" role="dialog">
      <div class="JJMS_bottom-sheet-content" @click.stop>
        <h3>Feedback Form</h3>
        <form @submit.prevent="JJMS_submitFeedback">
          <label for="JJMS_name">Name:</label>
          <input
            type="text"
            id="JJMS_name"
            v-model="JJMS_name"
            required
            aria-required="true"
          />

          <label for="JJMS_email">Email:</label>
          <input
            type="email"
            id="JJMS_email"
            v-model="JJMS_email"
            required
            aria-required="true"
            aria-describedby="JJMS_email-error"
          />
          <div id="JJMS_email-error" class="JJMS_error" v-if="!JJMS_isValidEmail">
            Please enter a valid email address.
          </div>

          <label for="JJMS_feedback">Feedback:</label>
          <textarea
            id="JJMS_feedback"
            v-model="JJMS_feedback"
            required
            aria-required="true"
          ></textarea>

          <div class="JJMS_button-container">
            <button type="submit">Submit</button>
            <button type="button" @click="JJMS_close">Close</button>
          </div>
        </form>
      </div>
      <div class="JJMS_bottom-sheet-overlay" @click="JJMS_close" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      JJMS_isOpen: false,
      JJMS_name: '',
      JJMS_email: '',
      JJMS_feedback: '',
      JJMS_isValidEmail: true,
      JJMS_isSubmitting: false,
    };
  },
  methods: {
    JJMS_openBottomSheet() {
      this.JJMS_isOpen = true;
    },
    JJMS_close() {
      this.JJMS_isOpen = false;
    },
    JJMS_submitFeedback() {
      if (!this.JJMS_isValidEmail) return;

      this.JJMS_isSubmitting = true;

      // Simulating form submission for demonstration purposes
      setTimeout(() => {
        console.log('Name:', this.JJMS_name);
        console.log('Email:', this.JJMS_email);
        console.log('Feedback:', this.JJMS_feedback);
        this.JJMS_close();
        this.JJMS_isSubmitting = false;
      }, 1000);
    },
    JJMS_validateEmail(email) {
      // Basic email validation regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
  watch: {
    JJMS_email() {
      this.JJMS_isValidEmail = this.JJMS_validateEmail(this.JJMS_email);
    },
  },
};
</script>

<style scoped>
.JJMS_bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  transition: transform 0.3s ease-out;
  transform: translateY(100%);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.JJMS_bottom-sheet.open {
  transform: translateY(0);
}

.JJMS_bottom-sheet-content {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-top: 10px;
}

input,
textarea {
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.JJMS_button-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.typing-enter-active,
.typing-leave-active {
  transition: opacity 0.5s;
}

.typing-enter,
.typing-leave-to {
  opacity: 0;
}
</style>