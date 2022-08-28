<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nav>
      <RouterLink to="/about/aaa">Home</RouterLink>
      <RouterLink to="/about/bbb">About</RouterLink>
      <RouterLink to="/about/ccc">Address</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

<style>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav > a {
margin: 0 30px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
