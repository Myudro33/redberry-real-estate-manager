<script setup>
import TheButton from './TheButton.vue';
import TheFilters from './filter/TheFilters.vue';
import RegionFilter from './filter/RegionFilter.vue';
import FilterBy from './filter/FilterBy.vue';
import { useEstateStore } from '@/stores';
const estateStore = useEstateStore()
</script>



<template>
    <div class="w-full  mt-20">
        <div class="w-full h-12 flex items-center justify-between">
            <div class="font-bold flex items-center relative ">
                <FilterBy @click="estateStore.filterBy('region')"
                    :class="[estateStore.filter.region ? 'bg-active-filter' : '']" title="რეგიონი"
                    :filter-by="estateStore.filter.region" />
                <RegionFilter v-if="estateStore.filter.region" />
                <FilterBy @click="estateStore.filterBy('price')"
                    :class="[estateStore.filter.price ? 'bg-active-filter' : '']" title="საფასო კატეგორია"
                    :filter-by="estateStore.filter.price" />
                <FilterBy @click="estateStore.filterBy('area')"
                    :class="[estateStore.filter.area ? 'bg-active-filter' : '']" title="ფართობი"
                    :filter-by="estateStore.filter.area" />
                <FilterBy @click="estateStore.filterBy('bedrooms')"
                    :class="[estateStore.filter.bedrooms ? 'bg-active-filter' : '']" title="საძინებლების რაოდენობა"
                    :filter-by="estateStore.filter.bedrooms" />
            </div>
            <div>
                <TheButton :background="true" :title="'+ ლისტინგის დამატება'" />
                <TheButton class="ml-4" :background="false" :title="'+ აგენტის დამატება'" />
            </div>
        </div>
    </div>
    <TheFilters />
</template>
