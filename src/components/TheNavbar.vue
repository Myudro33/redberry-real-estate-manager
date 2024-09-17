<script setup>
import TheButton from './TheButton.vue';
import TheFilters from './filter/TheFilters.vue';
import RegionFilter from './filter/RegionFilter.vue';
import FilterBy from './filter/FilterBy.vue';
import { useEstateStore } from '@/stores';
import PriceAndAreaFilter from './filter/PriceAndAreaFilter.vue';
import BedroomFilter from './filter/BedroomFilter.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const route = useRoute()
const estateStore = useEstateStore()
const emits = defineEmits(['bedroomQuantity', 'region', 'price', 'area'])
const submit = (e) => {
    emits('bedroomQuantity', e)
}
const filterRegion = (e) => {
    emits('region', e)
}
const filterPrice = (e) => {
    emits('price', e)
}
const filterArea = (e) => {
    emits('area', e)
}
watch(() => route.query, () => {
    if (route.query.min_area !== 0 || route.query.max_area !== 0) {
        emits('area', { min: route.query.min_area || 0, max: route.query.max_area || 0 })
    }
    if (route.query.regions) {
        emits('region', route.query.regions)
    }
    if (route.query.min_price !== 0 || route.query.max_price) {
        emits('price', { min: route.query.min_price || 0, max: route.query.max_price || 0 })

    }
    if (route.query.bedrooms !== undefined || !typeof route.query.bedrooms) {
        emits('bedroomQuantity', route.query.bedrooms)
    } else if (route.query.bedrooms === undefined) {
        emits('bedroomQuantity', '')
    }
}, { immediate: true });
</script>



<template>
    <div class="w-full  mt-20">
        <div class="w-full h-12 flex items-center justify-between">
            <div class="font-bold flex items-center relative rounded-lg border border-border-color ">
                <FilterBy @click="estateStore.filterBy('region')"
                    :class="[estateStore.filter.region ? 'bg-active-filter' : '']" title="რეგიონი"
                    :filter-by="estateStore.filter.region" />
                <RegionFilter @region="filterRegion" v-if="estateStore.filter.region" />
                <FilterBy @click="estateStore.filterBy('price')"
                    :class="[estateStore.filter.price ? 'bg-active-filter' : '']" title="საფასო კატეგორია"
                    :filter-by="estateStore.filter.price" />
                <PriceAndAreaFilter @filter-price-or-area="filterPrice" v-if="estateStore.filter.price"
                    filter-type="price" />
                <FilterBy @click="estateStore.filterBy('area')"
                    :class="[estateStore.filter.area ? 'bg-active-filter' : '']" title="ფართობი"
                    :filter-by="estateStore.filter.area" />
                <PriceAndAreaFilter @filter-price-or-area="filterArea" v-if="estateStore.filter.area"
                    filter-type="area" />
                <FilterBy @click="estateStore.filterBy('bedrooms')"
                    :class="[estateStore.filter.bedrooms ? 'bg-active-filter' : '']" title="საძინებლების რაოდენობა"
                    :filter-by="estateStore.filter.bedrooms" />
                <BedroomFilter @bedrooms="submit" v-if="estateStore.filter.bedrooms" />
            </div>
            <div>
                <TheButton router-to="add-listing" type="link" :background="true" :title="'+ ლისტინგის დამატება'" />
                <TheButton class="ml-4" :background="false" :title="'+ აგენტის დამატება'" query="agent" />
            </div>
        </div>
    </div>
    <TheFilters />
</template>
