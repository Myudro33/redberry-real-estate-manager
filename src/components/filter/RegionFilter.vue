<script setup>
import { ref } from 'vue';
import TheButton from '../TheButton.vue';
import { useEstateStore } from '@/stores';
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute()
const estateStore = useEstateStore()
const emits = defineEmits(['region'])
const filters = ref([...route.query.regions || ''])
const checked = ref(route.query.regions)
const filter = (e) => {
    if (filters.value.includes(e.target.value)) {
        return filters.value.splice(filters.value.indexOf(e.target.value), 1);
    }
    return filters.value.push(e.target.value)
}
const submit = () => {
    router.push({ query: { ...route.query, regions: filters.value } })
    emits('region', filters.value)
}
</script>

<template>
    <div
        class="flex z-50 flex-col bg-white w-[45.6rem] p-6 rounded-lg border border-border-color shadow-box-shadow h-72 absolute top-14">
        <h1 class="font-medium">რეგიონის მიხედვით</h1>
        <div class="w-full flex flex-wrap mt-6 ">
            <div class="w-1/3 h-8 flex items-center font-normal text-sm" v-for="item in estateStore.regions"
                :key="item.id">
                <input :checked="checked?.includes(item.name)" @change="filter" :value="item.name" class="w-5 h-5"
                    type="checkbox" :id="item.name" :name="item.name" />
                <label class="ml-2" :for="item.name">{{ item.name }}</label>
            </div>
        </div>
        <div class="w-full flex justify-end mt-auto">
            <TheButton @click="submit" :background="true" title="არჩევა" />
        </div>
    </div>
</template>
