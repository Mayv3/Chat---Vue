<script>
import Home from "./pages/Home.vue";

export default {
  name: 'App',
  components: { Home }
}
</script>

<template>
  <nav class="flex justify-between items-center p-4 bg-slate-100">
    <router-link :to="{ name: 'home' }" class="text-xl">Home</router-link>
    <ul class="flex gap-2">
      <li><router-link :to="{ name: 'chat' }" class="block py-2 px-4">Chat</router-link></li>
      <li><router-link :to="{ name: 'login' }" class="block py-2 px-4">Login</router-link></li>
      <li><router-link :to="{ name: 'register' }" class="block py-2 px-4">Register</router-link></li>
    </ul>
  </nav>
  <main class="container p-4 mx-auto min-h-fit">
    <router-view />
  </main>
  <footer class="flex justify-center h-24 bg-slate-900 text-center items-center text-slate-100">
    <p>Todos los derechos reservados
  </p>
  </footer>
</template>
