<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <ul class="text-black">
        <router-link to="/">Home</router-link>
        <router-link to="login">Login</router-link>
        <router-link to="register">Register</router-link>
      </ul>
    </nav>
  </header>
  <div>Hello world</div>

  <RouterView />
</template>


