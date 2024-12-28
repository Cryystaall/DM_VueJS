<template>
  <div class="panier-item">
    <div class="item-details">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }}€ x {{ item.quantite }}</p>
    </div>
    
    <div class="item-actions">
      <!-- Input pour la quantité -->
      <input 
        type="number" 
        min="1" 
        :value="item.quantite" 
        @input="$emit('update-quantity', item, parseInt($event.target.value))"
        class="quantity-input"
      />
      <!-- Bouton de suppression -->
      <button @click="$emit('remove-item', item.id)" class="remove-button">
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.panier-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.panier-item:hover {
  transform: translateY(-5px);
}

.item-details {
  flex: 1;
}

.item-details h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
}

.item-details p {
  font-size: 1rem;
  color: #777;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-input {
  width: 60px;
  padding: 8px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.quantity-input:focus {
  border-color: #ff6f61;
}

.remove-button {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #e65a50;
}
</style>
