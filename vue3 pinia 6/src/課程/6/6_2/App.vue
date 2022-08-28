<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore } from "./stores/counter.js";
import { useAboutStore } from "./stores/about.js";
const { addCount} = useCounterStore();
const { setName } = useAboutStore();
const clickAdd = () => {
  addCount();
}
const setUserName = (username) => {
  // console.log(444);
  setName(username);
};
</script>

<template>
  <header>
    <!-- <h1>{{store.counter}}</h1> -->
    <button @click="clickAdd">click</button>
    <button @click="setUserName('Andy')">set Name</button>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
