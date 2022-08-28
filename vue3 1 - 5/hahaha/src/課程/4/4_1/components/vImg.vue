
<!-- <script setup>語法糖 -->
<script setup>
    // const props = defineProps([
    //     'alt', 'className', 'src', 'width', 'height'
    // ]);
    const props = defineProps({
        alt: {
            type: String,
            default: "IMG alt"
        },
        className: {
            type: String,
            default: "icon"
        },
        width: {
            type: String,
            default: "125"
        },
        height: {
            type: String,
            default: "125"
        },
        src: {
            type: String,
            default: ""
        },
        bool: {
            type: Boolean,
            default: false
        },
        obj: {
            type: Object,
            // 誤認為function
            // default: () => {},
            // 一般
            // default: () => {
            //     return {};
            // }, 
            // ({}) 語法糖
            default: () => ({}),
        },
        array: {
            type: Array,
            default: () => [],
        },
    });
</script>
 
<template>
    <!-- 應該是自己會找對應 -->
    <img :class="props.className" :src="props.src" :alt="props.alt"
        :width="props.width" :height="props.height"
    />
</template>

<style scoped>

</style>

