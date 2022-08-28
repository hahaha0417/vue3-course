
<!-- <script setup>語法糖 -->
<script setup>
// import { computed } from '@vue/reactivity';
import { reactive, ref, watch, computed } from 'vue';

const count = ref(1);

const plusOne = computed({
    get: () => { 
        return count.value;
    },
    set: (val) => { 
        count.value = val;
    },
});

console.log("1=>", plusOne.value)
plusOne.value = 5;
console.log("2=>", plusOne.value)
console.log("3=>", count.value)

</script>

<template>
    <div>
        <h1>{{ data }}</h1>
    </div>
</template>

<style scoped>
</style>

