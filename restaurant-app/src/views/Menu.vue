<template>
  <div>
    <Header />
    <h2>Menu</h2>
    <div class="menu-grid">
      <PlatItem 
        v-for="plat in plats" 
        :key="plat.id" 
        :plat="plat" 
        @add-to-cart="addToCart" 
      />
    </div>
    <Toast ref="toast" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import PlatItem from "../components/PlatItem.vue";
import Toast from "../components/Toast.vue";
import { inject } from "vue";

export default {
  components: { Header, PlatItem, Toast },
  data() {
    return {
      plats: [
        { id: 1, name: "Pizza Margherita", description: "Simple et savoureuse", price: 12, isNew: false },
        { id: 2, name: "Tagliatelles au pesto", description: "Frais et délicieux", price: 10, isNew: false },
        { id: 3, name: "Risotto aux champignons", description: "Crémeux et parfumé", price: 14, isNew: true },
        { id: 4, name: "Lasagnes maison", description: "Un classique italien", price: 13, isNew: false },
        { id: 5, name: "Salade César", description: "Fraîche et croquante", price: 9, isNew: false },
        { id: 6, name: "Tiramisu", description: "Douceur italienne", price: 7, isNew: true },
        { id: 7, name: "Pizza Quattro Formaggi", description: "Délicieux mélange de quatre fromages fondants", price: 15, isNew: false },
        { id: 8, name: "Pizza Diavola", description: "Épicée avec salami piquant", price: 14, isNew: false },
        { id: 9, name: "Gelato", description: "Glace italienne fraîche et gourmande", price: 6, isNew: false },
      ],
    };
  },
  setup() {
    const ajouterAuPanier = inject("ajouterAuPanier");

    const addToCart = (plat) => {
      ajouterAuPanier(plat);  
      this.$refs.toast.show(`${plat.name} ajouté au panier`);
    };

    return { addToCart };
  }
};
</script>

<style scoped>
/* Organisation en grille avec 3 colonnes */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}

/* Titre */
h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
}
</style>
