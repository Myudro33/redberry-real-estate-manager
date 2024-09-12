<script setup>
import TheArrow from './icons/TheArrow.vue';
import TheButton from './TheButton.vue';
import TheFilters from './filter/TheFilters.vue';
import RegionFilter from './filter/RegionFilter.vue';
import { ref } from 'vue';
const filter = ref({
    region: false,
    price: false,
    area: false,
    bedrooms: false
})
</script>



<template>
    <div class="w-full bg-blue-500 mt-20">
        <div class="w-full h-12 flex items-center justify-between">
            <div class="font-bold flex items-center relative ">
                <span @click="() => filter.region = !filter.region"
                    class="py-2 px-3 flex items-center cursor-pointer ">რეგიონი
                    <TheArrow class="transition-all" :class="[filter.region ? 'rotate-180' : 'rotate-0']" />
                </span>
                <RegionFilter v-if="filter.region" />
                <span class="py-2 px-3 flex items-center">საფასო კატეგორია
                    <TheArrow />
                </span>
                <span class="py-2 px-3 flex items-center">ფართობი
                    <TheArrow />
                </span>
                <span class="py-2 px-3 flex items-center">საძინებლების რაოდენობა
                    <TheArrow />
                </span>
            </div>
            <div>
                <TheButton :background="true" :title="'+ ლისტინგის დამატება'" />
                <TheButton class="ml-4" :background="false" :title="'+ აგენტის დამატება'" />
            </div>
        </div>
    </div>
    <TheFilters />
</template>
