<template>
  <div class="plat-item">
    <!-- Badge "Nouveau" incliné en haut à droite -->
    <div v-if="plat.isNew" class="nouveau-badge">Nouveau</div>
    <div class="plat-details">
      <h3>{{ plat.name }}</h3>
      <p class="description">{{ plat.description }}</p>
      <p class="price">{{ plat.price }}€</p>
    </div>
    <button @click="$emit('add-to-cart', plat)" class="add-to-cart-button">Ajouter au panier</button>
  </div>
</template>

<script>
export default {
  props: {
    plat: Object,
  },
};
</script>

<style scoped>
/* Style de la carte */
.plat-item {
  position: relative;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s ease;
}

.plat-item:hover {
  transform: translateY(-5px);
}

/* Badge "Nouveau" incliné */
.nouveau-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff6f61;
  color: white;
  font-weight: bold;
  padding: 7px 15px;
  border-radius: 5px;
  transform: rotate(15deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
}

/* Détails du plat */
.plat-details {
  margin-bottom: 15px;
}

.plat-details h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.plat-details .description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #333;
  font-size: 1.2rem;
}

/* Bouton "Ajouter au panier" */
.add-to-cart-button {
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.1rem;
}

.add-to-cart-button:hover {
  background-color: #f45345;
}
</style>
