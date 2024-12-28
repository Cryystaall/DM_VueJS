<template>
    <div v-if="visible" class="toast">{{ message }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        message: "",
      };
    },
    methods: {
      show(message) {
        this.message = message;
        this.visible = true;
        setTimeout(() => (this.visible = false), 3000);
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6f61;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;
    animation: fadeInOut 3s;
  }
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  </style>
  
  