<template>
  <div class="admin-container">
    <Header /> <!-- Ajout de la barre de navigation -->
    <h2>Gestion des Commandes</h2>
    
    <!-- Commandes en cours -->
    <div v-if="state.commandes.filter(commande => !commande.prete).length === 0" class="no-commandes">
      Aucune commande en attente.
    </div>
    <div v-for="commande in state.commandes.filter(commande => !commande.prete)" :key="commande.id" class="commande-card">
      <div class="commande-header">
        <h3>Commande #{{ commande.id }} - {{ commande.clientName }}</h3>
        <span class="commande-en-attente">En attente</span>
      </div>
      <div class="commande-details">
        <ul>
          <li v-for="plat in commande.plats" :key="plat.id">
            <strong>{{ plat.quantite }} x {{ plat.name }}</strong> ({{ plat.price }}€)
          </li>
        </ul>
        <p class="commande-total">
          Total : {{ commande.plats.reduce((sum, p) => sum + p.price * p.quantite, 0) }}€
        </p>
      </div>
      <button 
        @click="marquerCommePrete(commande)" 
        :disabled="commande.prete"
        class="marquer-btn"
      >
        Marquer comme prête
      </button>
    </div>

    <!-- Commandes archivées -->
    <div v-if="state.commandes.filter(commande => commande.prete).length === 0" class="no-commandes">
      Aucune commande archivée.
    </div>
    <div v-for="commande in state.commandes.filter(commande => commande.prete)" :key="commande.id" class="commande-card">
      <div class="commande-header">
        <h3>Commande #{{ commande.id }} - {{ commande.clientName }}</h3>
        <span class="commande-prete">Prête</span>
      </div>
      <div class="commande-details">
        <ul>
          <li v-for="plat in commande.plats" :key="plat.id">
            <strong>{{ plat.quantite }} x {{ plat.name }}</strong> ({{ plat.price }}€)
          </li>
        </ul>
        <p class="commande-total">
          Total : {{ commande.plats.reduce((sum, p) => sum + p.price * p.quantite, 0) }}€
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, watch } from 'vue';
import Header from '../components/Header.vue'; // Importation de la barre de navigation

export default {
  components: {
    Header,
  },
  setup() {
    const state = inject('state'); // Injection du state global

    // Marquer la commande comme prête
    const marquerCommePrete = (commande) => {
      commande.prete = true; // Marquer la commande comme prête
    };

    // Sauvegarde des commandes dans localStorage
    watch(() => state.commandes, () => {
      localStorage.setItem('commandes', JSON.stringify(state.commandes));
    }, { deep: true });

    return { state, marquerCommePrete };
  },
  created() {
    // Chargement des commandes depuis localStorage lors de l'initialisation
    const savedCommandes = JSON.parse(localStorage.getItem('commandes')) || [];
    this.state.commandes = savedCommandes;
  }
};
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
}

.no-commandes {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
}

.commande-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.commande-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.commande-header h3 {
  font-size: 1.5rem;
  margin: 0;
}

.commande-header span {
  font-size: 1.1rem;
  font-weight: bold;
}

.commande-prete {
  color: green;
}

.commande-en-attente {
  color: orange;
}

.commande-details {
  margin: 15px 0;
}

.commande-details ul {
  list-style-type: none;
  padding: 0;
}

.commande-details li {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.commande-total {
  font-size: 1.2rem;
  font-weight: bold;
}

.marquer-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  margin-top: 20px;
}

.marquer-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.marquer-btn:hover:enabled {
  background-color: #45a049;
}
</style>
