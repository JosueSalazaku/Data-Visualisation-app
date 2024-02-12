<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
          <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/signup">login</RouterLink>
        <h1 class="text-orange-500">Hello</h1>
      </nav>
      <RouterView />
</template>