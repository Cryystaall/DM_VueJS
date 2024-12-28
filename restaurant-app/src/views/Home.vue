<template>
  <div class="page-container">
    <Header 
      title="La Bella Tavola" 
      description="Bienvenue dans notre restaurant italien ! Découvrez nos spécialités maison et commandez en ligne."
    />
    <main>
      <h2>Découvrez l'Italie dans votre assiette</h2>
      <p class="description">
        Chez La Bella Tavola, nous vous proposons une expérience culinaire unique, avec des plats traditionnels préparés avec amour et des ingrédients de qualité. Savourez nos pizzas, nos pâtes fraîches et bien plus encore.
      </p>
      <router-link to="/menu"><button>Voir le Menu</button></router-link>
    </main>
    <footer>
      <p>📍 Adresse : 123 Rue de Rome, 75008 Paris</p>
      <p>📧 Email : contact@labellatavola.fr</p>
      <p>📞 Téléphone : +33 1 23 45 67 89</p>
      <p>&copy; 2024 La Bella Tavola. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: { Header },
};
</script>

<style scoped>
/* Conteneur principal */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main */
main {
  flex: 1; /* S'étire pour prendre tout l'espace disponible */
  padding: 20px;
  text-align: center;
}

/* Titre */
h2 {
  text-align: center;
  color: #333;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}

/* Description */
.description {
  text-align: center;
  margin: 20px auto;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  max-width: 600px;
}

/* Bouton */
button {
  display: block;
  margin: 30px auto;
  padding: 12px 25px;
  background: #ff6f61;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
}
button:hover {
  background: #e65a50;
}

/* Footer */
footer {
  background: #ff6f61; /* Rouge similaire au header */
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: auto; /* Force le footer à rester en bas */
}

footer p {
  margin: 5px 0;
}
</style>
