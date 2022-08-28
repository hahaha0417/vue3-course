
<!-- <script setup>語法糖 -->
<script setup>
import { ref } from "vue";
const name = ref("mike");
const setName = (str) => {
  name.value = str;
};



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
    <input type="text" v-model.lazy="name" />
    <!-- <input type="text" v-model="name" /> -->
    {{name}}
    <button @click="setName('jacky')">click</button>
  </div>
</template>

<style scoped>

</style>

