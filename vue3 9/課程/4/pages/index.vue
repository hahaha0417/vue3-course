<script setup>

    const point = ref(100);
    const { count } = useAddCount();
    // setInterval(() => {
    //         point.value++;
    //     },
    //     1000
    // )
    // server render一次，client render在一次
    console.log(count);
    // server沒window元件
    // console.log(window);
    if(process.client) {
        console.log(window);
        console.log(localStorage);
    }
    onMounted(() => {
        // console.log(window);
    })
</script>

<template>
    <div>
        <h1>{{ count }}</h1>
        <h1>首頁</h1>
        <h1>{{ point }}</h1>
        <Card />
        <Todo />
    </div>
</template>

<style scoped>

</style>
