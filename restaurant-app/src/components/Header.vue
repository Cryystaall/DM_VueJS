<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/panier">Panier</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "La Bella Tavola",
    },
    description: {
      type: String,
      default: "Découvrez la cuisine italienne authentique et savoureuse.",
    },
  },
};
</script>

<style scoped>
.header {
  background: #ff6f61;
  padding: 1rem;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>
