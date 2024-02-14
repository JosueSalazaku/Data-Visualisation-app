<template>
  <main class="w-screen h-screen flex flex-col justify-center items-center">
    <section class="w-2/5 h-1/2 flex flex-col justify-center items-center rounded-md border-2 border-indigo-800 p-10">
      <form action="" class="h-full flex flex-col justify-evenly">
        <label for="name" class="flex flex-col items-center">
          <span class="mb-2 mr-52">Name</span>
          <input
            type="text"
            id="name"
            name="name"
            class="h-10 w-64 cursor-default rounded-md border-2 border-indigo-800 p-3.5 text-black transition-colors duration-500 placeholder-select-none placeholder-text-neutral-500 focus:border-[rgb(0,0,0)] focus:outline-none"
            placeholder="Enter your name"
          />
        </label>
        <label for="lastname" class="flex flex-col items-center">
          <span class="mb-2 mr-44">Last Name</span>
          <input
            type="text"
            id="lastname"
            name="lastname"
            class="h-10 w-64 cursor-default rounded-md border-2 border-indigo-800 p-3.5 text-black transition-colors duration-500 placeholder-select-none placeholder-text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
            placeholder="Enter your last name"
          />
        </label>
        <label for="email" class="flex flex-col items-center">
          <span class="mb-2 mr-52">Email</span>
          <input
            type="email"
            id="email"
            name="email"
            class="h-10 w-64 cursor-default rounded-md border-2 border-indigo-800 p-3.5 text-black transition-colors duration-500 placeholder-select-none placeholder-text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
            placeholder="Enter your email"
          />
        </label>
        <div class="flex justify-center">
          <button class="justify-center h-10 w-64 bg-indigo-800 rounded-md text-slate-100">Login</button>
        </div>
      </form>
    </section>
  </main>
</template>
