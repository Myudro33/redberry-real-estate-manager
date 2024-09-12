<script setup>
import TheArrow from '../icons/TheArrow.vue';

const props = defineProps(['title', 'filterBy'])
</script>
<template>
    <span class="py-2 px-3 flex items-center  cursor-pointer rounded-xl">{{ props.title }}
        <TheArrow class="transition-all" :class="[props.filterBy ? 'rotate-180' : 'rotate-0']" />
    </span>
</template>