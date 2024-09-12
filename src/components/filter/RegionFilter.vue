<script setup>
import TheButton from '../TheButton.vue';
import { useEstateStore } from '@/stores';
const estateStore = useEstateStore()
</script>

<template>
    <div
        class="flex flex-col bg-white w-[45.6rem] p-6 rounded-lg border border-border-color shadow-box-shadow h-72 absolute top-14">
        <h1 class="font-medium">რეგიონის მიხედვით</h1>
        <div class="w-full flex flex-wrap mt-6 ">
            <div class="w-1/3 h-6 flex items-center font-normal text-sm " v-for="item in estateStore.regions"
                :key="item.id">
                <input class="w-5 h-5" type="checkbox" :name="item.name" />
                <label class="ml-2" for="scales">{{ item.name }}</label>
            </div>
        </div>
        <div class="w-full flex justify-end mt-auto">
            <TheButton :background="true" title="არჩევა" />
        </div>
    </div>
</template>
