<template>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
        <NotFoundIcon class="w-96 h-96" />
        <h1 class="text-4xl font-bold font-firago">გვერდი არ მოიძებნა :(</h1>
        <TheButton class="mt-6" title="საწყისზე დაბრუნება" router-to="home" :background="true" type="link" />
    </div>
</template>


<script setup>
import NotFoundIcon from '@/components/icons/NotFoundIcon.vue';
import TheButton from '@/components/TheButton.vue';
</script>