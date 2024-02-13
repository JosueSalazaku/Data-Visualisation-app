<script setup>
import { reactive } from 'vue'
import NavbarItems from './components/NavbarItems.vue'


const data = reactive({
  isDarkMode: false
})

const toggleDarkMode = () => {
  data.isDarkMode = !data.isDarkMode
}
</script>

<template>
  <div :class="{ dark: data.isDarkMode, light: !data.isDarkMode }">
    <header>
      <NavbarItems :darkMode="data.isDarkMode" @toggleDarkMode="toggleDarkMode" />
    </header>
  </div>
</template>

<style scoped>
.dark {
  --bg-color: #000000; /* set your dark mode background color */
  --text-color: #ffffff; /* set your dark mode text color */
}

.light {
  --bg-color: #ffffff; /* set your light mode background color */
  --text-color: #333333; /* set your light mode text color */
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
</style>
