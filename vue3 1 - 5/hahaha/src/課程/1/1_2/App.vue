
<!-- <script setup>語法糖 -->
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

// ------------------------------ 
// 擺放順序
// 官方
// 變數
// computed(回傳變數)
// 函式
// other(watch onMounted onUnmount)
// ------------------------------ 
// let name = "mike";
// let name = ref("mike");
// ref應用這個*
const name = ref("mike");

const changeName = () => {
    name.value = "Jacky";
    console.log(name);
};

onMounted(() => {
    console.log(name.value);
});
</script>

<template>
    <div>
        <h1>{{ name }}</h1>
        <button @click="changeName">click</button>
    </div>

</template>

<style>
</style>

