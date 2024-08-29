// src/composables/useCountries.js
import { ref, onMounted } from "vue";

export function useCountries() {
  const countries = ref([]);

  const fetchCountries = async () => {
    const query = `
      query {
        countries {
            emoji
            name
            capital
            continent {
            name
            }
        }
    }
    `;

    try {
      const response = await fetch("https://countries.trevorblades.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const jsonResponse = await response.json();
      countries.value = jsonResponse.data.countries;
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  onMounted(fetchCountries);

  return {
    countries,
  };
}
