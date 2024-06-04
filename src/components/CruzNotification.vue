<template>
  <div class="RDCbg-blue-500 RDCh-screen RDCflex RDCjustify-center RDCitems-center">
    <div class="RDCbg-white RDCp-8 RDCrounded-lg RDCshadow-md RDCw-96">
      <h1 class="RDCtext-4xl RDCfont-semibold RDCmb-4 RDCtext-center RDCtext-gray-700">Notifications</h1>
      <p class="RDCtext-xl RDCfont-semibold RDCmb-4 RDCtext-center RDCtext-gray-700">
        The notification component supports different types of notifications such as success, error, warning, and info messages, making it versatile and essential for user communication. Here are the various designs or formats a notification can take:
      </p>

      <div class="RDCmb-6 RDCtext-center">
        <h2 class="RDCtext-2xl RDCfont-bold RDCmb-4 RDCtext-gray-700">Default Notifications</h2>
        <div class="RDCspace-y-4">
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowNotification('Notification Light', 'This is a notification in light mode.', 'light')">Notification Light</button>
          <button class="RDCbtn-dark RDCw-full RDCpy-2 RDCpx-4 RDCbg-gray-800 RDCtext-white RDCrounded-md RDChover:bg-gray-900" @click="RDCshowNotification('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
        </div>
      </div>

      <div class="RDCmb-6 RDCtext-center">
        <h2 class="RDCtext-2xl RDCfont-bold RDCmb-4 RDCtext-gray-700">Notification Positions</h2>
        <div class="RDCspace-y-4">
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification', 'This is a top right notification.', 'light', 'tr')">Top Right</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification', 'This is a top left notification.', 'light', 'tl')">Top Left</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification', 'This is a bottom right notification.', 'light', 'lr')">Bottom Right</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification', 'This is a bottom left notification.', 'light', 'll')">Bottom Left</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification', 'This is a center notification.', 'light', 'tc')">Center</button>
        </div>
      </div>
       
      <div class="RDCmb-6 RDCtext-center">
        <h2 class="RDCtext-2xl RDCfont-bold RDCmb-4 RDCtext-gray-700">Notification Icons</h2>
        <div class="RDCspace-y-4">
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification Icon Mail', 'This is a top right notification.', 'light', 'tr')">Notification Icon Mail</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification Icon Error', 'This is a top left notification.', 'light', 'tl')">Notification Icon Error</button>
          <button class="RDCbtn-light RDCw-full RDCpy-2 RDCpx-4 RDCbg-indigo-600 RDCtext-white RDCrounded-md RDChover:bg-indigo-700" @click="RDCshowPositionNotification('Notification Icon Chat', 'This is a bottom right notification.', 'light', 'lr')">Notification Icon Chat</button>
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
    };
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
          return 'fas fa-moon RDCtext-yellow-500';
        case 'light':
          return 'fas fa-sun RDCtext-yellow-500';
        default:
          return 'fas fa-info-circle RDCtext-blue-500';
      }
    }
  }
};
</script>

<style scoped>
.RDCnotification-container {
  position: fixed;
  z-index: 9999;
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
  background-color: #f0f0f0;
  color: #333;
}

.RDCnotification.dark {
  background-color: #333;
  color: #fff;
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
    transform: translateY(50px);
  }
}

.RDCnotification-icon {
  font-size: 24px;
}
</style>
