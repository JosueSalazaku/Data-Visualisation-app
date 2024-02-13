<script setup>
</script>

<template>
  <main class="w- screen h-screen flex flex-col justify-center items-center">
   <section class="w-2/5 h-1/2 flex flex-col justify-center align-middle rounded-md border x-10">
    <form action="" class="h-1/2 flex flex-col justify-around">
      <label for="Email" placholder="Email" class="flex justify-center">
      <input type="email" name="Email" class="h-10 w-64 cursor-default rounded-md border-2 border-indigo-800 p-3.5 text-slate-100 transition-colors duration-500 placeholder-select-none placeholder-text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none">
      </label>
      <label for="Email" placholder="Email" class="flex justify-center">
      <input type="password" class="h-10 w-64  cursor-default rounded-md border-2 border-indigo-800 p-3.5 text-slate-100 transition-colors duration-500 placeholder-select-none placeholder-text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none">
      </label>
      <div class="flex justify-center">
      <button class="justify-center h-10 w-64 bg-indigo-800 rounded-md">login</button>
      </div>
    </form>
   </section>
  </main>
</template>

