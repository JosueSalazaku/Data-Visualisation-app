<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const props = defineProps(['darkMode']);
const emits = defineEmits(['toggleDarkMode']);

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  emits('toggleDarkMode', isDarkMode.value);
};
</script>

<template>
  <nav :class="{ 'dark': isDarkMode, 'light': !isDarkMode }" class="w-screen h-24 flex p-10 justify-between items-center bg-black text-white font-bold border-b-2 border-indigo-500">
    <RouterLink to="/">
      <img src="/Users/josuesalazaku/Developer/Projects/Data-Visualisation-app/Client/src/assets/searching-data-in-database-svgrepo-com .svg" alt="" class="w-12 h-12 fill-current bg-white">
    </RouterLink>

    <div class="ml-24 flex justify-around">
      <RouterLink to="/" class="mr-10">Home</RouterLink>
      <RouterLink to="/about" class="mr-10">About</RouterLink>
    </div>

    <div class="mr-10 flex justify-around">
      <RouterLink to="/login" class="mr-8 border-4 bg-indigo-700 border-indigo-700 rounded-lg px-6 py-2">Login</RouterLink>
      <RouterLink to="/signup" class="border-4 bg-indigo-700 border-indigo-700 rounded-lg px-6 py-2">Sign Up</RouterLink>
    </div>
    
    <button @click="toggleDarkMode" class="mr-4 px-4 py-2 border-2 border-white rounded-lg">
      {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </nav>
  <RouterView />
</template>

<style>
/* Apply dark and light mode styles here */
.dark {
  /* Dark mode styles */
  --bg-color: #1a202c;
  --text-color: #ffffff;
}

.light {
  /* Light mode styles */
  --bg-color: #ffffff;
  --text-color: #333333;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
