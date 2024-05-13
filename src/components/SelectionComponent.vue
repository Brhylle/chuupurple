<!-- Ritchmond James Tajarros -->
<!-- 1. Payment Selector -->
<template>
  <div class="payment_container">
    <div class="title">
      <h4>Select a <span class="highlight">Payment</span> Method</h4>
    </div>

    <div class="payment_methods">
      <div
        v-for="method in paymentMethods"
        :key="method.id"
        :class="['payment_method', { selected: selectedPaymentMethod === method.id }]"
        @click="selectPaymentMethod(method.id)"
      >
        <div class="icon_container">
          <img :src="method.imgSrc" :alt="method.name" class="payment_logo" />
        </div>
        <div class="payment_name">{{ method.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPaymentMethod: "",
      paymentMethods: [
        { id: "visa", name: "VISA", imgSrc: "https://i.ibb.co/vjQCN4y/Visa-Card.png" },
        { id: "mastercard", name: "Mastercard", imgSrc: "https://i.ibb.co/vdbBkgT/mastercard.jpg" },
        { id: "paypal", name: "Paypal", imgSrc: "https://i.ibb.co/KVF3mr1/paypal.png" },
        {
          id: "GCash",
          name: "GCash",
          imgSrc: "https://play-lh.googleusercontent.com/QNP0Aj2hyumAmYiWVAsJtY2LLTQnzHxdW7-DpwFUFNkPJjgRxi-BXg7A4yI6tgYKMeU",
        },
      ],
    };
  },
  methods: {
    selectPaymentMethod(methodId) {
      this.selectedPaymentMethod = methodId;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

.payment_container {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: linear-gradient(145deg, #f8f1ff, #e6dbff);
  box-shadow: 0 4px 20px rgba(123, 97, 255, 0.3);
  text-align: center;
  font-family: "Poppins", sans-serif;
}

.title h4 {
  font-size: 24px;
  color: #5e35b1;
  font-weight: 600;
}

.title .highlight {
  color: #7b61ff;
}

.payment_methods {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.payment_method {
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: #ffffff;
  border: 2px solid transparent;
}

.payment_method:hover {
  border-color: #9c27b0; /* Purple */
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(156, 39, 176, 0.5); /* Purple */
}

.payment_method.selected {
  border-color: #673ab7; /* Deeper purple for selected */
  box-shadow: 0 8px 25px rgba(103, 58, 183, 0.5); /* Deep purple */
}

@media (max-width: 600px) {
  .payment_methods {
    grid-template-columns: 1fr;
  }
}

.icon_container {
  padding: 10px;
  background: #ede7f6; /* Light purple */
  border-radius: 50%;
  width: 90px;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment_logo {
  max-width: 70%;
  max-height: 70%;
}

.payment_name {
  margin-top: 12px;
  font-size: 16px;
  color: #5e35b1;
}
</style>
