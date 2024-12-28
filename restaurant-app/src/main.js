import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// State global pour le panier
const panierState = reactive({
  items: [],
  addItem(plat) {
    const existingItem = this.items.find(item => item.id === plat.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...plat, quantity: 1 });
    }
  },
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  },
  updateQuantity(id, quantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = quantity;
    }
  },
  clear() {
    this.items = [];
  },
});

// Fournir le panier à toute l'application
app.provide('panier', panierState);

app.use(router);
app.mount('#app');
