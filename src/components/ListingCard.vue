<template>
    <div @click="openListing"
        class="w-96 font-firago z-0 h-[28rem] flex flex-col relative rounded-lg border border-border-color transition-all hover:shadow-lg overflow-hidden">
        <img class="h-72 object-fill" :src="props.image" alt="listing-image">
        <span
            class="absolute left-5 top-5 flex justify-center items-center text-white font-medium  h-7 p-4 rounded-2xl bg-deal-type">{{
                props.deal == 0 ? 'იყიდება' : 'ქირავდება'
            }}</span>
        <div class="w-full px-6 py-[1.38rem] flex flex-col text-3xl font-bold">
            <h1>{{ props.price }} ₾</h1>
            <span class="text-gray-text font-normal text-base flex items-center mt-2">
                <LocationIcon class="mr-2" />

                {{ ` ${props.city}, ${props.location}` }}
            </span>
            <div class="h-6 flex text-base font-normal text-gray-text mt-5">
                <div class="flex items-center">
                    <BedIcon class="mr-1" />
                    {{ props.bedrooms }}
                </div>
                <div class="flex items-center ml-4">
                    <AreaIcon class="mr-1" />
                    {{ props.area }} მ²
                </div>
                <div class="flex items-center ml-4">
                    <PostIcon class="mr-1" />
                    {{ props.postalCode }}
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import router from '@/router';
import AreaIcon from './icons/AreaIcon.vue';
import BedIcon from './icons/BedIcon.vue';
import LocationIcon from './icons/LocationIcon.vue';
import PostIcon from './icons/PostIcon.vue';
import { useListingStore } from '@/stores/listings';
const listingStore = useListingStore()
const props = defineProps(['id', 'deal', 'image', 'price', 'location', 'bedrooms', 'area', 'postalCode', 'city'])
const openListing = () => {
    listingStore.getSingleListing(props.id)
    router.push({ name: 'inner-page', params: { id: props.id } })
}
</script>