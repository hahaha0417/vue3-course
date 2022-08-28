
<!-- <script setup>語法糖 -->
<script setup>
import { ref, watch } from "vue";
import TextBox from "./components/TextBox.vue";


const name = ref("mike");
const updateName = (newName) => {
  name.value = newName;
}

</script>

<template>
  <div>
    <!-- https://vuejs.org/guide/components/events.html#usage-with-v-model -->
    <textBox :name="name" @change-name="updateName" />
  </div>
</template>

<style scoped>

</style>

