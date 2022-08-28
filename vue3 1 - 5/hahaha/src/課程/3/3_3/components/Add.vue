
<script setup>
    const emit = defineEmits(["AddInt"]);

    // 第一個是滑鼠click事件
    const handleAddClick = (event, a = 1, b = 2) => {
        const coin = a + b;
        emit("AddInt", coin);    
    }
</script>
 
<template>
    <div>
        <button @click="handleAddClick">click</button>   
    </div>
</template>

<style scoped>

</style>

