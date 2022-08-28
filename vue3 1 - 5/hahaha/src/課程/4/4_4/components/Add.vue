
<script setup>
    const emit = defineEmits({
        AddInt: (payload) => {
            if(payload === 'mike') {
                return true;
            } else {
                return false;
            }
        }
    });

    const handleAddClick = () => {
        // emit("AddInt", "mike");  
        // 會出現警告 
        emit("AddInt", "jacky");   
    }
</script>
 
<template>
    <div>
        <button @click="handleAddClick">click</button>   
    </div>
</template>

<style scoped>

</style>

