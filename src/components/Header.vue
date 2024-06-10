<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1> {{ text }} </h1>
        <slot></slot>
        <slot name="part1_header" :param="data.param_from_slot"></slot>
    </div>
</template>

<script setup>
import {reactive} from 'vue';


const data = reactive({
    param_from_slot: 'Helloww from part1 header'
})

defineProps({
    text: {
        type: String,
        default:''
    }
})

</script>