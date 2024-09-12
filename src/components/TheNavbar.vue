<script setup>
import TheButton from './TheButton.vue';
import TheFilters from './filter/TheFilters.vue';
import RegionFilter from './filter/RegionFilter.vue';
import { ref } from 'vue';
import FilterBy from './filter/FilterBy.vue';
const filter = ref({
    region: false,
    price: false,
    area: false,
    bedrooms: false
})
</script>



<template>
    <div class="w-full  mt-20">
        <div class="w-full h-12 flex items-center justify-between">
            <div class="font-bold flex items-center relative ">
                <FilterBy @click="() => filter.region = !filter.region"
                    :class="[filter.region ? 'bg-active-filter' : '']" title="რეგიონი" :filter-by="filter.region" />
                <RegionFilter v-if="filter.region" />
                <FilterBy @click="() => filter.price = !filter.price" :class="[filter.price ? 'bg-active-filter' : '']"
                    title="საფასო კატეგორია" :filter-by="filter.price" />
                <FilterBy @click="() => filter.area = !filter.area" :class="[filter.area ? 'bg-active-filter' : '']"
                    title="ფართობი" :filter-by="filter.area" />
                <FilterBy @click="() => filter.bedrooms = !filter.bedrooms"
                    :class="[filter.bedrooms ? 'bg-active-filter' : '']" title="საძინებლების რაოდენობა"
                    :filter-by="filter.bedrooms" />
            </div>
            <div>
                <TheButton :background="true" :title="'+ ლისტინგის დამატება'" />
                <TheButton class="ml-4" :background="false" :title="'+ აგენტის დამატება'" />
            </div>
        </div>
    </div>
    <TheFilters />
</template>
