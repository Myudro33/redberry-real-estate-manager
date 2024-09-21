<script setup>
import { ref } from 'vue';
import TheButton from '../TheButton.vue';
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute()
const inputValue = ref(route.query.bedrooms || "")
const emits = defineEmits('')
const submit = () => {
    if (inputValue.value > 0) {
        router.push({ query: { ...route.query, bedrooms: inputValue.value } })
    } else {
        const { bedrooms, ...remainingQuery } = route.query;
        router.push({
            query: remainingQuery
        });
    }
    emits('bedrooms', inputValue.value)
}
</script>

<template>
    <div
        class="flex flex-col z-50 bg-white w-72 p-6 rounded-lg border border-border-color shadow-box-shadow h-48 absolute top-14 right-[-1rem]">
        <h1 class="font-medium">საძინებლების რაოდენობა</h1>
        <div class="w-full flex flex-wrap mt-6 ">
            <input v-model="inputValue" class="w-11 h-11 border border-input-border px-4 rounded-md" placeholder="2"
                type="text">
        </div>
        <div class="w-full flex justify-end mt-auto">
            <TheButton @click="submit" :background="true" title="არჩევა" />
        </div>
    </div>
</template>
