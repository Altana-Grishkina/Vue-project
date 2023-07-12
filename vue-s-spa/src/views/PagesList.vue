<template>
    <p>{{counter }}</p>
    <button @click.prevent="data.counter++">click</button>
</template>

<script setup>
import {ref, reactive} from 'vue';

// const counter = ref(0);
const data = reactive({counter: 0})

function click() {
    // counter.value++;
    // console.log(counter);
    data.counter++;
}

// export default {
//     data() {
//         return {
//             counter: 0
//         };
//     },
//     methods: {
//         click() {
//             this.counter++;
//         }
//     }
// }

</script>