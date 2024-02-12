<script setup>
import { ref, defineEmits } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const emits = defineEmits(['toggleDarkMode']);
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  emits('toggleDarkMode', isDarkMode.value);
};
</script>


<template>
 <nav :style="{ backgroundColor: isDarkMode ? 'var(--bg-color-dark)' : 'var(--bg-color-light)' }" class="w-screen h-24 flex p-10 justify-between items-center text-white font-bold border-b-2 border-indigo-500">    <RouterLink to="/">
      <img src="/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/assets/searching-data-in-database-svgrepo-com .svg" alt="" class="w-16 h-16 fill-current">
    </RouterLink>

    <div class="ml-24 flex justify-around">
      <RouterLink to="/" :class="{ 'dark-link': isDarkMode, 'light-link': !isDarkMode }" class="mr-10">Home</RouterLink>
      <RouterLink to="/about" :class="{ 'dark-link': isDarkMode, 'light-link': !isDarkMode }" class="mr-10">About</RouterLink>
    </div>

    <div class="mr-10 flex justify-around">
      <RouterLink to="/login" class="mr-8 border-4 bg-indigo-700 border-indigo-700 rounded-lg px-6 py-2">Login</RouterLink>
      <RouterLink to="/signup" class="border-4 bg-indigo-700 border-indigo-700 rounded-lg px-6 py-2">Sign Up</RouterLink>
    </div>
    
    <button @click="toggleDarkMode" :class="{ 'dark-button': isDarkMode, 'light-button': !isDarkMode }" class="mr-4 px-4 py-2 border-2 border-white rounded-lg">
  {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
</button>

  </nav>
  <RouterView />
</template>

<style>
:root {
  --bg-color-dark: #000000;
  --text-color-dark: #ffffff;

  --bg-color-light: #ffffff;
  --text-color-light: #000000;
}

.dark {
  /* Dark mode styles */
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
}

.light {
  /* Light mode styles */
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
}

body {
  /* Set default styles here */
  margin: 0;
  font-family: "Raleway", sans-serif;
}

.dark-button {
  /* Dark mode button styles */
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
}

.light-button {
  /* Light mode button styles */
  background-color: var(--bg-color-light);
  color: #4338ca;
}

.dark-link {
  /* Dark mode link styles */
  color: var(--text-color-dark);
}

.light-link {
  /* Light mode link styles */
  color: #4338ca;
}


</style>
