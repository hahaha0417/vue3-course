<script setup>
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from "vue";
import { useCounterStore } from "../stores/counter.js";
const store = useCounterStore();
// 變數不可以解構，ref會被解包，導致功能不正常
// const {counter, cardList} = useCounterStore();
// 需這樣取
const {counter, doubleCount, cardList} = storeToRefs(store);

// watch state
// https://pinia.web3doc.top/core-concepts/state.html#%E8%AE%A2%E9%98%85%E7%8A%B6%E6%80%81
store.$subscribe((mutation, state) => {
  console.log(mutation);
});

watch(doubleCount, (newVal, oldVal) => {
  console.log("newVal => " + newVal);
  console.log("oldVal => " + oldVal);
});
</script>

<template>
  <div class="item">
    <h1>{{ counter }}</h1>
    <h1>{{ doubleCount }}</h1>
    <pre>
      {{ cardList }}
    </pre>
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
