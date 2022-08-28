<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Add from "./components/Add.vue";
import vImg from "./components/vImg.vue";
import Logo from "./assets/logo.svg";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
// console.log(import(props.src));

const isChange = ref(0);

const Component = computed(() => {
  switch(isChange.value) {
    case 0:
      return vImg;
    case 1:
      return Add;
    case 2:
      return HelloWorld;
    default:
      return HelloWorld;
  }
})

const changeComponent = (idx) => {
  isChange.value = idx;
};
</script>

<template>
  <header> 
    <button @click="changeComponent(0)">components 1 {{isChange}}</button>
    <button @click="changeComponent(1)">components 2 {{isChange}}</button>
    <button @click="changeComponent(2)">components 3 {{isChange}}</button>
    <div class="wrapper">
      <component :is="Component" />
      <!-- <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
