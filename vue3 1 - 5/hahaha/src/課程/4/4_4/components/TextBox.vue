
<!-- <script setup>語法糖 -->
<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: "",
        },
    });

    const emit =defineEmits(['change-name']);

    const changeName = (name) => {
        emit("change-name", "jacky");
    }
</script>

<template>
 <div>
    <h1>{{ props.name }}</h1>
    <button @click="changeName">change name</button>
 </div>
</template>

<style scoped>

</style>

