<script setup>
const props = defineProps(['background', 'title'])
</script>

<template>
    <button
        :class="[props.background ? 'text-white bg-button-background hover:bg-button-background-hover' : 'bg-transparent hover:bg-button-background border border-button-background text-button-background hover:text-white']"
        class="px-4 py-[10px] h-12 text-base font-medium rounded-[10px]">{{ props.title
        }}</button>
</template>