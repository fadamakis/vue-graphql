// src/composables/useCountries.js
import { ref, onMounted } from 'vue';

export function useCountries() {
  const countries = ref([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      countries.value = data;
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  onMounted(fetchCountries);

  return {
    countries,
  };
}