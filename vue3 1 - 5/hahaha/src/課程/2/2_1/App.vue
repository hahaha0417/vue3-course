
<!-- <script setup>語法糖 -->
<script setup>
import { reactive, ref } from 'vue';

const name = ref("mike");
// 太散亂
// const name = ref("mike");
// const age = ref("12");
// const address = ref("台灣");

const people = reactive({         // [] or {}
    name: "mike",
    age: 12,
    address: "台灣",
});

console.log(name);

// setTimeout(() => {
//     data.name = "jacky";
//     data.age = 20;
//     data.address = "台北";
// }, 2000);

</script>

<template>
<div>
    <h1>{{ people.name }}</h1>
    <h1>{{ people.age }}</h1>
    <h1>{{ people.address }}</h1>
</div>
</template>

<style scoped>
</style>

