<template>
  <router-view />
</template>

<script setup>
import { reactive, provide, watch } from "vue";

// Chargement des données depuis localStorage (si elles existent)
const savedPanier = JSON.parse(localStorage.getItem('panier')) || [];
const savedCommandes = JSON.parse(localStorage.getItem('commandes')) || [];

// State global pour gérer le panier et les commandes
const state = reactive({
  panier: savedPanier,
  commandes: savedCommandes,
});

// Fonction pour ajouter un plat au panier
function ajouterAuPanier(plat) {
  const index = state.panier.findIndex((item) => item.id === plat.id);
  if (index !== -1) {
    // Si l'article est déjà dans le panier, on augmente sa quantité
    state.panier[index].quantite += 1;
  } else {
    // Sinon, on l'ajoute avec une quantité initiale de 1
    state.panier.push({ ...plat, quantite: 1 });
  }
}

// Fonction pour ajouter une commande (lorsque le panier est finalisé)
function ajouterCommande(clientName) {
  const nouvelleCommande = {
    id: state.commandes.length + 1,
    clientName,
    plats: [...state.panier],
  };
  state.commandes.push(nouvelleCommande);
  state.panier = []; // Réinitialise le panier
}

// Sauvegarde des données dans localStorage chaque fois qu'elles sont modifiées
watch(() => state.panier, () => {
  localStorage.setItem('panier', JSON.stringify(state.panier));
}, { deep: true });

watch(() => state.commandes, () => {
  localStorage.setItem('commandes', JSON.stringify(state.commandes));
}, { deep: true });

// Fournir les données et fonctions aux composants enfants
provide("state", state);
provide("ajouterAuPanier", ajouterAuPanier);
provide("ajouterCommande", ajouterCommande);
</script>

<style scoped>
/* Style global de votre application */
</style>
