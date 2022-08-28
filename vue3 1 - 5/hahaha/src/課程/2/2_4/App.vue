
<!-- <script setup>語法糖 -->
<script setup>
import { reactive, ref, watch } from 'vue';

const age = ref(12);


const people1 = ref({       
    num: 0,
});

const people2 = reactive({       
    num: 0,
});

setTimeout(() => {
    age.value = 25;
    people1.value.num = 100;
    people2.num = 100;
}, 2000);

watch(age, () => {
    console.log("這個是 age 被改變了");
});

watch(people1, () => {
    console.log("這個是people1被改變了");
},
// watch(深度)
{ deep:true }
);

watch(people2, () => {
    console.log("這個是people2被改變了");
});

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

