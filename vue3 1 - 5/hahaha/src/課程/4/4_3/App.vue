
<!-- <script setup>語法糖 -->
<script setup>
import { ref, watch } from "vue";
import InputBar from "./components/InputBar.vue";

const num = ref("123");

watch(num, (newVal) => {
  console.log(newVal);
});


</script>

<template>
  <div>
    <!-- https://vuejs.org/guide/components/events.html#usage-with-v-model -->
    <InputBar v-model="num" />
    {{ num }}
  </div>
</template>

<style scoped>

</style>

