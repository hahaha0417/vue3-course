
<!-- <script setup>語法糖 -->
<script setup>
import { reactive, ref } from 'vue';

const name = ref("mike");
// 太散亂
// const name = ref("mike");
// const age = ref("12");
// const address = ref("台灣");

const people1 = ref({       
    name: "mike",
    age: 12,
    address: "台灣",
});
people1.value.name = "jacky";

// const people2 = reactive({         // [] or {}
//     name: "mike",
//     age: 12,
//     address: "台灣",
// });

console.log(name);

// setTimeout(() => {
//     data.name = "jacky";
//     data.age = 20;
//     data.address = "台北";
// }, 2000);

</script>

<template>
<div>
    <h1>{{ people1.name }}</h1>
    <h1>{{ people1.age }}</h1>
    <h1>{{ people1.address }}</h1>
</div>
</template>

<style scoped>
</style>

