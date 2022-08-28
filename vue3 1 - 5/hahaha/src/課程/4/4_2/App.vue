
<!-- <script setup>語法糖 -->
<script setup>
import { ref, watch } from "vue";
const num = ref("123");

watch(num, (newVal) => {
  console.log(newVal);
});

</script>

<template>
  <div>
    <!-- Limited to:

    <input>
    <select>
    <textarea>
    components
    Modifiers:

    .lazy - listen to change events instead of input
    .number - cast valid input string to numbers
    .trim - trim input -->
    <input type="text" v-model.number="num" />
    <!-- <input type="text" v-model="name" /> -->
    {{num}}
    <button @click="setName('jacky')">click</button>
  </div>
</template>

<style scoped>

</style>

