<template>
  <div class="panier-container">
    <h2>Votre Panier</h2>
    
    <!-- Si le panier est vide -->
    <div v-if="state.panier.length === 0" class="empty-panier">
      <p>Votre panier est vide.</p>
      
      <!-- Bouton pour rediriger vers le menu si panier vide -->
      <button @click="goToMenu" class="go-to-menu-button">Voir le menu</button>
    </div>

    <!-- Si le panier contient des articles -->
    <div v-else class="panier-content">
      <div v-for="item in state.panier" :key="item.id">
        <PanierItem 
          :item="item" 
          @update-quantity="updateQuantity" 
          @remove-item="removeItem" 
        />
      </div>

      <!-- Affichage du total -->
      <p class="total">Total : {{ total }}€</p>

      <!-- Champ pour entrer le nom -->
      <div class="user-input">
        <input 
          v-model="userName" 
          placeholder="Votre nom" 
          :disabled="state.panier.length === 0"
          class="name-input"
        />
      </div>

      <!-- Bouton pour finaliser la commande -->
      <button 
        :disabled="!userName || state.panier.length === 0" 
        @click="finaliserCommande"
        class="finalize-button"
      >
        Finaliser la commande
      </button>
    </div>

    <!-- Message de confirmation de commande -->
    <div v-if="commandeValidee" class="confirmation">
      <p>Commande validée pour {{ userName }} !</p>
    </div>
  </div>
</template>

<script>
import { inject, ref, computed } from "vue";
import { useRouter } from "vue-router"; // Importation du routeur pour rediriger
import PanierItem from "../components/PanierItem.vue"; // Importation du composant PanierItem

export default {
  components: { PanierItem }, // Déclaration du composant PanierItem
  setup() {
    const state = inject("state"); // Injection du state global
    const ajouterCommande = inject("ajouterCommande"); // Fonction pour ajouter une commande
    const userName = ref(""); // Nom de l'utilisateur
    const commandeValidee = ref(false); // Etat pour la confirmation de commande
    const router = useRouter(); // Initialisation du routeur

    // Calcul du total du panier
    const total = computed(() =>
      state.panier.reduce((sum, item) => sum + item.price * item.quantite, 0)
    );

    // Fonction pour mettre à jour la quantité d'un plat dans le panier
    const updateQuantity = (item, quantite) => {
      const found = state.panier.find((p) => p.id === item.id);
      if (found && quantite > 0) found.quantite = quantite; // Evite les quantités négatives
    };

    // Fonction pour supprimer un plat du panier
    const removeItem = (id) => {
      state.panier = state.panier.filter((item) => item.id !== id);
    };

    // Fonction pour finaliser la commande et rediriger vers la page d'accueil
    const finaliserCommande = () => {
      if (userName.value.trim() && state.panier.length > 0) {
        ajouterCommande(userName.value); // Ajout de la commande globale
        commandeValidee.value = true; // Afficher la confirmation
        setTimeout(() => {
          userName.value = ""; // Réinitialiser le nom
          commandeValidee.value = false; // Cacher la confirmation
          router.push("/"); // Redirection vers la page d'accueil après 2 secondes
        }, 2000);
      }
    };

    // Fonction pour rediriger vers le menu si panier vide
    const goToMenu = () => {
      router.push("/menu"); // Remplacer '/menu' par le chemin de votre page menu
    };

    return { state, total, userName, updateQuantity, removeItem, finaliserCommande, commandeValidee, goToMenu };
  },
};
</script>

<style scoped>
/* Container général du panier */
.panier-container {
  width: 90%;
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

/* Titre du panier */
h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
}

/* Message quand le panier est vide */
.empty-panier {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
}

/* Bouton pour aller au menu */
.go-to-menu-button {
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #ff6f61; /* Rouge spécifique */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.go-to-menu-button:hover {
  background-color: #e65a50; /* Rouge plus clair au survol */
}

/* Contenu du panier */
.panier-content {
  padding-bottom: 30px;
}

/* Total du panier */
.total {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #333;
}

/* Saisie du nom */
.user-input {
  text-align: center;
  margin: 20px 0;
}

.name-input {
  padding: 12px 20px;
  border: 2px solid #ff6f61;
  border-radius: 5px;
  font-size: 1rem;
  width: 60%;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.name-input:focus {
  border-color: #e65a50;
  outline: none;
}

/* Bouton finaliser la commande */
.finalize-button {
  display: block;
  margin: 20px auto;
  padding: 15px 20px;
  background-color: #ff6f61; /* Rouge spécifique */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  width: 80%;
  transition: background-color 0.3s ease;
}

.finalize-button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.finalize-button:hover:enabled {
  background-color: #e65a50; /* Rouge plus clair au survol */
}

/* Confirmation de commande */
.confirmation {
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #4caf50;
  font-weight: bold;
}
</style>
