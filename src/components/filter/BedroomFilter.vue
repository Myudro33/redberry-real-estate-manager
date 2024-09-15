<script setup>
import TheButton from '../TheButton.vue';
</script>

<template>
    <div
        class="flex flex-col z-50 bg-white w-72 p-6 rounded-lg border border-border-color shadow-box-shadow h-48 absolute top-14 right-[-1rem]">
        <h1 class="font-medium">საძინებლების რაოდენობა</h1>
        <div class="w-full flex flex-wrap mt-6 ">
            <input class="w-11 h-11 border border-input-border px-4 rounded-md" placeholder="2" type="text">
        </div>
        <div class="w-full flex justify-end mt-auto">
            <TheButton :background="true" title="არჩევა" />
        </div>
    </div>
</template>
