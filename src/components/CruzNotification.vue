<template>
  <div class="rdc-background-Notif rounded-xl bg-background-300 h-full flex justify-center p-4 items-center">
    <div class="bg-background-100 p-8 rounded-lg shadow-md w-96">
      <p class="text-sm font-medium mb-4 text-center text-text-700">
        The notification component supports different types of notifications such as success, error, warning, and info messages, making it versatile and essential for user communication. Here are the various designs or formats a notification can take:
      </p>

      <!-- *** DEFAULT NOTIFICATIONS -->
      <div class="mb-6 text-center">
        <h2 class="text-2xl font-bold mb-4 text-text-700">Default Notifications</h2>
        <div class="flex gap-2">
          <button class="btn-light w-1/2 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowNotification('Notification Light', 'This is a notification in light mode.', 'light')">Notification Light</button>
          <button class="btn-dark w-1/2 py-2 px-4 bg-primary-800 text-text-50 rounded-md hover:bg-primary-900" @click="RDCshowNotification('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
        </div>
      </div>

      <!-- *** NOTIFICATION POSITIONS -->
      <div class="mb-6 text-center">  
        <h2 class="text-2xl font-bold mb-4 text-text-700">Notification Positions</h2>
        <div class="flex flex-col gap-2 justify-center align-items">
          <div class="flex justify-center align-items gap-2">
            <button class="btn-light w-1/2 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification', 'This is a top right notification.', 'info', 'tr')">Top Right</button>
            <button class="btn-light w-1/2 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification', 'This is a top left notification.', 'info', 'tl')">Top Left</button>
          </div>

          <div class="flex justify-center align-items gap-2">
            <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification', 'This is a bottom right notification.', 'info', 'lr')">Bottom Right</button>
            <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification', 'This is a bottom left notification.', 'info', 'll')">Bottom Left</button>
            <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification', 'This is a center notification.', 'info', 'tc')">Center</button>
          </div>
        </div>
      </div>
       
      <!-- *** NOTIFICATION ICON -->
      <div class="mb-6 text-center">
        <h2 class="text-2xl font-bold mb-4 text-text-700">Notification Icons</h2>
        <div class="flex gap-2 justify-center ">
          <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification Icon Mail', 'This is a top right notification.', 'mail', 'tr')">Notification Icon Mail</button>
          <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification Icon Error', 'This is a top left notification.', 'error', 'tl')">Notification Icon Error</button>
          <button class="btn-light w-1/3 py-2 px-4 bg-primary-600 text-text-50 rounded-md hover:bg-primary-700" @click="RDCshowPositionNotification('Notification Icon Chat', 'This is a bottom right notification.', 'chat', 'lr')">Notification Icon Chat</button>
        </div>
      </div>
    </div>

    <div class="RDCnotification-container">
      <div v-for="notification in RDCnotifications" :key="notification.id" 
           :class="['RDCnotification', notification.type, notification.animation]" 
           v-show="notification.visible" 
           :style="RDCnotificationStyle(notification.position)" 
           @transitionend="RDCremoveNotification(notification.id)">
        <i :class="RDCgetIconClass(notification.type)" class="RDCnotification-icon"></i>
        <div class="RDCnotification-content">
          <strong>{{ notification.title }}</strong>: {{ notification.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RDCnotifications: [],
      RDCnotificationId: 0,
      theme: 'light', 
    };
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.theme);
  },
  methods: {
    RDCshowNotification(title, text, type = null) {
      const position = type === 'dark' ? 'br' : 'tr'; // Adjust position based on mode
      const animation = this.RDCnotifications.length > 0 ? 'fadeOutDown' : ''; // Set animation based on existing notifications
      const notification = {
        id: this.RDCnotificationId++,
        title,
        text,
        type,
        visible: true,
        position,
        animation
      };

      this.RDCnotifications.push(notification);

      setTimeout(() => {
        this.RDCfadeOutNotification(notification.id);
      }, 2000);
    },

    RDCshowPositionNotification(title, text, type = null, position = 'tl') {
      const animation = this.RDCnotifications.length > 0 ? 'fadeOutDown' : ''; // Set animation based on existing notifications
      const notification = {
        id: this.RDCnotificationId++,
        title,
        text,
        type,
        position,
        visible: true,
        animation
      };
      this.RDCnotifications.push(notification);

      setTimeout(() => {
        this.RDCfadeOutNotification(notification.id);
      }, 2000);
    },

    RDCfadeOutNotification(id) {
      const notification = this.RDCnotifications.find(notification => notification.id === id);
      if (notification) {
        notification.visible = false;
        setTimeout(() => {
          this.RDCremoveNotification(id);
        }, 500);
      }
    },

    RDCremoveNotification(id) {
      this.RDCnotifications = this.RDCnotifications.filter(n => n.id !== id);
    },

    RDCnotificationStyle(position) {
      const positionClasses = {
        tl: { top: '4px', left: '4px' },
        tc: { top: '4px', left: '50%', transform: 'translateX(-50%)' },
        tr: { top: '4px', right: '4px' },
        ll: { bottom: '4px', left: '4px' },
        lc: { bottom: '4px', left: '50%', transform: 'translateX(-50%)' },
        lr: { bottom: '4px', right: '4px' }
      };

      const baseStyle = {
        position: 'fixed',
        transition: 'opacity 0.5s ease-in-out',
        opacity: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
      };

      return { ...baseStyle, ...positionClasses[position] };
    },

    RDCgetIconClass(type) {
      switch (type) {
        case 'dark':
          return 'fas fa-moon text-yellow-500';
        case 'light':
          return 'fas fa-sun text-yellow-500';
        case 'info':
          return 'fa-solid fa-circle-info text-blue-500';
        case 'error':
          return 'fa-solid fa-circle-exclamation text-red-500';
        case 'chat':
          return 'fa-solid fa-message text-blue-500';
        case 'mail': 
          return 'fa-solid fa-envelope text-blue-500';
        default:
          return 'fa-solid fa-circle-warning text-blue-500';
      }
    },

    toggleTheme() { 
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }
};
</script>

<style scoped>
.RDCnotification-container {
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.RDCnotification {
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.RDCnotification.light {
  background-color: var(--background-800);
  color: var(--text-100);
}

.RDCnotification.dark {
  background-color: var(--background-200);
  color: var(--text-800);
}

.RDCnotification.info {
  background-color: var(--background-800);
  color: var(--text-100);
}

.RDCnotification.error {
  background-color: var(--background-200);
  color: var(--text-800);
}

.RDCnotification.chat {
  background-color: var(--background-800);
  color: var(--text-100);
}

.RDCnotification.mail {
  background-color: var(--background-200);
  color: var(--text-800);
}

.RDCnotification.fadeOutDown {
  animation: RDCfadeOutDown 2s ease-in-out;
}

@keyframes RDCfadeOutDown {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
}

.RDCnotification-icon {
  font-size: 24px;
}
</style>
