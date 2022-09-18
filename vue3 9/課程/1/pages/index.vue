<script setup>

    const point = ref(100);

    setInterval(() => {
            point.value++;
        },
        1000
    )

</script>

<template>
    <div>
        <h1>首頁</h1>
        <h1>{{ point }}</h1>
    </div>
</template>

<style scoped>

</style>
