<template>
    <div class="bg-blue-500 h-screen flex justify-center items-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 class="text-4xl font-semibold mb-4 text-center text-gray-700">Notifications</h1>
        <p class="text-xl font-semibold mb-4 text-center text-gray-700">
          The notification component supports different types of notifications such as success, error, warning, and info messages, making it versatile and essential for user communication. Here are the various designs or formats a notification can take:
        </p>
  
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold mb-4 text-gray-700">Default Notifications</h2>
          <div class="space-y-4">
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showNotification('Notification Light', 'This is a notification in light mode.', 'light')">Notification Light</button>
            <button class="btn-dark w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900" @click="showNotification('Notification Dark', 'This is a notification in dark mode.', 'dark')">Notification Dark</button>
          </div>
        </div>
  
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold mb-4 text-gray-700">Notification Positions</h2>
          <div class="space-y-4">
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification', 'This is a top right notification.', 'light', 'tr')">Top Right</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification', 'This is a top left notification.', 'light', 'tl')">Top Left</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification', 'This is a bottom right notification.', 'light', 'lr')">Bottom Right</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification', 'This is a bottom left notification.', 'light', 'll')">Bottom Left</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification', 'This is a center notification.', 'light', 'tc')">Center</button>
          </div>
        </div>
         
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold mb-4 text-gray-700">Notification Icons</h2>
          <div class="space-y-4">
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification Icon Mail', 'This is a top right notification.', 'light', 'tr')">Notification Icon Mail</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification Icon Error', 'This is a top left notification.', 'light', 'tl')">Notification Icon Error</button>
            <button class="btn-light w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" @click="showPositionNotification('Notification Icon Chat', 'This is a bottom right notification.', 'light', 'lr')">Notification Icon Chat</button>
          </div>
        </div>
      </div>
  
      <div class="notification-container">
        <div v-for="notification in notifications" :key="notification.id" 
             :class="['notification', notification.type, notification.animation]" 
             v-show="notification.visible" 
             :style="notificationStyle(notification.position)" 
             @transitionend="removeNotification(notification.id)">
          <i :class="getIconClass(notification.type)" class="notification-icon"></i>
          <div class="notification-content">
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
        notifications: [],
        notificationId: 0,
      };
    },
    methods: {
      showNotification(title, text, type = null) {
        const position = type === 'dark' ? 'br' : 'tr'; // Adjust position based on mode
        const animation = this.notifications.length > 0 ? 'fadeOutDown' : ''; // Set animation based on existing notifications
        const notification = {
          id: this.notificationId++,
          title,
          text,
          type,
          visible: true,
          position,
          animation
        };
  
        this.notifications.push(notification);
  
        setTimeout(() => {
          this.fadeOutNotification(notification.id);
        }, 2000);
      },
  
      showPositionNotification(title, text, type = null, position = 'tl') {
        const animation = this.notifications.length > 0 ? 'fadeOutDown' : ''; // Set animation based on existing notifications
        const notification = {
          id: this.notificationId++,
          title,
          text,
          type,
          position,
          visible: true,
          animation
        };
        this.notifications.push(notification);
  
        setTimeout(() => {
          this.fadeOutNotification(notification.id);
        }, 2000);
      },
  
      fadeOutNotification(id) {
        const notification = this.notifications.find(notification => notification.id === id);
        if (notification) {
          notification.visible = false;
          setTimeout(() => {
            this.removeNotification(id);
          }, 500);
        }
      },
  
      removeNotification(id) {
        this.notifications = this.notifications.filter(n => n.id !== id);
      },
  
      notificationStyle(position) {
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
  
      getIconClass(type) {
        switch (type) {
          case 'dark':
            return 'fas fa-moon text-yellow-500';
          case 'light':
            return 'fas fa-sun text-yellow-500';
          default:
            return 'fas fa-info-circle text-blue-500';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .notification-container {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
  
  .notification {
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    pointer-events: all;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .notification.light {
    background-color: #f0f0f0;
    color: #333;
  }
  
  .notification.dark {
    background-color: #333;
    color: #fff;
  }
  
  .notification.fadeOutDown {
    animation: fadeOutDown 2s ease-in-out;
  }
  
  @keyframes fadeOutDown {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }
  
  .notification-icon {
    font-size: 24px;
  }
  </style>
  