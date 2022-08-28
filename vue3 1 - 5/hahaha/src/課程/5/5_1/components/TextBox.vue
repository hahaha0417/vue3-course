
<!-- <script setup>語法糖 -->
<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: "",
        },
        updateName: {
            type: Function,
            default: () => {}, 
        },
    });



</script>

<template>
 <div>
    <h1>{{ props.name }}</h1>
    <button @click="props.updateName('jacky')">change name</button>
 </div>
</template>

<style scoped>

</style>

