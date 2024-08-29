<template>
  <div class="country-card">
    <div class="flag-and-name">
      <span class="emoji">{{ country.emoji }}</span>
      <h2>{{ country.name }}</h2>
    </div>
    <div class="country-info">
      <p><strong>Capital:</strong> {{ country.capital || "N/A" }}</p>
      <p><strong>Continent:</strong> {{ country.continent.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(["country"]);
</script>

<style scoped>
.country-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.country-card:hover {
  transform: translateY(-5px);
}

.flag-and-name {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.emoji {
  font-size: 2rem;
  margin-right: 10px;
}

.country-info {
  text-align: left;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
}

p {
  margin: 5px 0;
  font-size: 1rem;
}
</style>
