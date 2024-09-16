<template>
    <span class="flex first:ml-0 ml-2 items-center rounded-3xl border border-border-color px-2 py-1">{{
        props.title }}
        <DeleteIcon @click="props.function" class="ml-1" />
    </span>
</template>

<script setup>
import DeleteIcon from '../icons/DeleteIcon.vue';

const props = defineProps(['title', 'function'])
</script>