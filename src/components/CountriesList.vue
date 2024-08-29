<template>
  <div class="container">
    <h1>Countries List</h1>
    <div class="country-list">
      <CountryCard v-for="country in countries" :key="country.cca3" :country="country" />
    </div>
  </div>
</template>

<script setup>
import CountryCard from "./CountryCard.vue";
import { useCountries } from "../composables/useCountriesGraphQL";

const { countries } = useCountries();
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 80px;
  font-family: "Arial", sans-serif;
  position: relative;
}

h1 {
  font-size: 2rem;
  margin: 0;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100%;
  text-align: center;
}
</style>
