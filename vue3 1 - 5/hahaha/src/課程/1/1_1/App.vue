<script>
// // export default {
// //     // Properties returned from data() become reactive state
// //     // and will be exposed on `this`.
// //     data() {
// //         return {
// //             count: 0
// //         }
// //     },

// //     // Methods are functions that mutate state and trigger updates.
// //     // They can be bound as event listeners in templates.
// //     methods: {
// //         increment() {
// //             this.count++
// //         }
// //     },

// //     // Lifecycle hooks are called at different stages
// //     // of a component's lifecycle.
// //     // This function will be called when the component is mounted.
// //     mounted() {
// //         console.log(`The initial count is ${this.count}.`)
// //     }
// // }
// import { onMounted, ref } from 'vue'

// export default {
//     setup() {
//         const count = ref(0);

//         const increment = () => {
//             count.value += 1;
//         };

//         // composition法
//         onMounted(() => {
//             console.log(count.value);
//         });

//         return {
//             count,
//             increment
//         };
//     },
//     // option法
//     // mounted() {
//     //     console.log(this.count);
//     // },
//     // conposition

// }
</script>

<!-- <script setup>語法糖 -->
<script setup>

import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }

});

const count = ref(0);

const increment = () => {
    count.value += 1;
};

// composition法
onMounted(() => {
    console.log(count.value);
});

</script>

<template>
    <div>
        <h1>Vue : {{ count }}</h1>
        <button @click="increment">Count is: {{ count }}</button>
        <HelloWorld />
    </div>

</template>

<style>
body{
    background-color: white;
}
</style>
