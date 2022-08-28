
<!-- <script setup>語法糖 -->
<script setup>
// import { computed } from '@vue/reactivity';
import { reactive, ref, watch, computed } from 'vue';

// const name = ref("mike");

// const data = computed(() => {
//     return `請叫我${name.value}!`;
// });

// setTimeout(() => {
//     name.value = "andy";
// }, 2000);

const idx = ref(0);

const user = reactive({
    name: "mike",
    age: 12,
});

// computed不能傳參數
const data = computed(() => {
    return `我是${user.name}，我今年${user.age}歲`;
});

setTimeout(()=>{
    idx.value = 5;
}, 2000)

</script>

<template>
<div>
    <h1>{{ data }}</h1>
</div>
</template>

<style scoped>
</style>

