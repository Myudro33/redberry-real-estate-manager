<script setup>
import { ref, watch } from 'vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import FilterCard from './FilterCard.vue';
const route = useRoute()
const bedroomFilter = ref(route.query.bedrooms || null)
const areaFilter = ref({ min: route.query.min_area || 0, max: route.query.max_area || 0 })
const priceFilter = ref({ min: route.query.min_price || 0, max: route.query.max_price || 0 })
const regionFilter = ref(route.query.regions || [])
const removeButton = ref(false)
const emits = defineEmits(['area', 'region', 'price', 'bedroomQuantity'])
const removeBedroomFilter = () => {
    const { bedrooms, ...remainingQuery } = route.query;
    router.push({
        query: remainingQuery
    });
    bedroomFilter.value = null
    removeButton.value = false
}
const removeAreaFilter = () => {
    const { min_area, max_area, ...remainingQuery } = route.query;
    router.push({
        query: remainingQuery
    });
    areaFilter.value.min = 0
    areaFilter.value.max = 0
    removeButton.value = false
}
const removePriceFilter = () => {
    const { min_price, max_price, ...remainingQuery } = route.query;
    router.push({
        query: remainingQuery
    });
    priceFilter.value.min = 0
    priceFilter.value.max = 0
    removeButton.value = false
}
const removeSingleRegion = (region) => {
    const currentArray = route.query.regions ? [...route.query.regions] : [];
    const index = regionFilter.value.indexOf(region)
    if (index >= 0 && index < currentArray.length && typeof regionFilter.value !== 'string') {
        currentArray.splice(index, 1);
        router.push({
            query: {
                ...route.query,
                regions: currentArray
            }
        });
    } else {
        const { regions, ...remainingQuery } = route.query;
        router.push({
            query: remainingQuery
        });
    }
    if (typeof regionFilter.value !== 'string') {
        regionFilter.value.splice(index, 1)
    } else {
        regionFilter.value = []
    }
    removeButton.value = false
}
const removeFilters = () => {
    router.push({ name: 'home' })
    bedroomFilter.value = null
    areaFilter.value.min = 0
    areaFilter.value.max = 0
    priceFilter.value.min = 0
    priceFilter.value.max = 0
    regionFilter.value = []
    if (route.query.min_area !== 0 || route.query.max_area !== 0) {
        emits('area', { min: route.query.min_area || 0, max: route.query.max_area || 0 })
    }
    if (route.query.regions) {
        emits('region', route.query.regions)
    }
    if (route.query.min_price !== 0 || route.query.max_price) {
        emits('price', { min: route.query.min_price || 0, max: route.query.max_price || 0 })

    }
    if (route.query.bedrooms !== undefined) {
        emits('bedroomQuantity', route.query.bedrooms)
    } else {
        emits('bedroomQuantity', '')
    }
    removeButton.value = false

}
watch(() => route.query, () => {
    bedroomFilter.value = route.query.bedrooms
    if (route.query.bedrooms) {
        removeButton.value = true
    }
    if (route.query.min_area || route.query.max_area) {
        removeButton.value = true
        areaFilter.value.min = route.query.min_area
        areaFilter.value.max = route.query.max_area
    }
    if (route.query.min_price || route.query.max_price) {
        removeButton.value = true
        priceFilter.value.min = route.query.min_price
        priceFilter.value.max = route.query.max_price
    }
    if (route.query.regions?.length > 0) {
        removeButton.value = true
        regionFilter.value = route.query.regions
    }
}, { deep: true });

</script>

<template>
    <div class="mt-4 flex items-center gap-2 ">
        <FilterCard v-if="bedroomFilter" :function="removeBedroomFilter" :title="bedroomFilter" />
        <FilterCard v-if="areaFilter.min !== 0 && areaFilter.max !== 0" :function="removeAreaFilter" :title="`${areaFilter.min || 0} მ²
            - ${areaFilter.max || '∞'} მ²`" />
        <FilterCard v-if="priceFilter.min !== 0 && priceFilter.max !== 0" :function="removePriceFilter" :title="`${priceFilter.min || 0} ₾
            - ${priceFilter.max || '∞'} ₾`" />
        <div class="flex gap-2" v-if="typeof regionFilter == 'object'">
            <span v-for="(items, index) in regionFilter" :key="index"
                class="flex items-center  rounded-3xl border border-border-color px-2 py-1">{{ items }}
                <DeleteIcon @click="removeSingleRegion(items)" class="ml-1" />
            </span>
        </div>
        <span v-else class="flex items-center  rounded-3xl border border-border-color px-2 py-1">{{ regionFilter }}
            <DeleteIcon @click="removeSingleRegion(regionFilter)" class="ml-1" />
        </span>
        <p v-if="removeButton" @click="removeFilters" class="font-bold ml-4 cursor-pointer">გასუფთავება</p>
    </div>
</template>
