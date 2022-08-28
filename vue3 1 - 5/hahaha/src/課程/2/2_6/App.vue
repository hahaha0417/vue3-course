
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

const data = computed(() => {
    // if(idx.value > 3 ) 
    // {
    //     return "這個大於3";
    // }
    // else 
    // {
    //     return "這個小於3";
    // }
    return idx.value > 3 ? "這個大於3" : "這個小於3";
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

