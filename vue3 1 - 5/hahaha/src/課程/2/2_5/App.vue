
<!-- <script setup>語法糖 -->
<script setup>
import { reactive, ref, watch } from 'vue';

const num = ref(12);

const people2 = reactive({       
    num: num,
});

setTimeout(() => {
    people2.num = 123;
}, 2000);

console.log(people2);
// https://staging-cn.vuejs.org/api/reactivity-core.html
// 响应式转换是“深层”的：它会影响到所有嵌套的属性。
// 一个响应式对象也将深层地解包任何 ref 属性，同时保持响应性。
console.log(people2.num);

</script>

<template>
<div>
    <h1>{{ age }}</h1>
    <h1>{{ people1.num }}</h1>
    <h1>{{ people2.num }}</h1>
</div>
</template>

<style scoped>
</style>

