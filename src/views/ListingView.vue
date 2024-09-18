<script setup>
import AgentCard from '@/components/AgentCard.vue';
import AreaIcon from '@/components/icons/AreaIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import BedIcon from '@/components/icons/BedIcon.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';
import PostIcon from '@/components/icons/PostIcon.vue';
import TheCarousel from '@/components/TheCarousel.vue';
import { useListingStore } from '@/stores/listings';
import { useModalStore } from '@/stores/modal';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const listingStore = useListingStore()
const router = useRoute()
const modalStore = useModalStore()
onMounted(() => {
    listingStore.getListing()
    listingStore.getSingleListing(router.params.id)
})
const openModal = () => {
    modalStore.changeModal('remove-listing')
}
</script>

<template>
    <h1 class="text-5xl text-center font-bold" v-if="listingStore.loading">loading...</h1>
    <div v-else-if="listingStore.singleListing.id" class="px-40 py-16">
        <router-link :to="{ name: 'home' }">
            <ArrowIcon />
        </router-link>
        <div class="w-full flex  mt-7">
            <img class="w-[52.4rem] h-[41.8rem] rounded-lg object-fill" :src="listingStore.singleListing.image"
                alt="listing-image">
            <div class="flex flex-col w-[31.4rem] ml-[4.25rem] text-2xl text-gray-text font-normal">
                <h1 class="font-bold text-5xl text-[#021526]">{{ listingStore.singleListing.price }} ₾
                </h1>
                <span class="flex items-center mt-5">
                    <LocationIcon class="w-5 mr-2" /> {{ `${listingStore.singleListing.city.name},
                    ${listingStore.singleListing.address} `
                    }}
                </span>
                <span class="flex items-center mt-4">
                    <AreaIcon class="w-5 mr-2" /> {{ listingStore.singleListing.area }} მ²
                </span>
                <span class="flex items-center mt-4">
                    <BedIcon class="w-5 mr-2" /> საძინებელი {{ listingStore.singleListing.bedrooms }}
                </span>
                <span class="flex items-center mt-4">
                    <PostIcon class="w-5 mr-2" /> საფოსტო ინდექსი {{ listingStore.singleListing.bedrooms }}
                </span>
                <p class="text-base text-gray-text font-normal mt-10 ">{{ listingStore.singleListing.description }}</p>
                <AgentCard :agent="listingStore.singleListing.agent" />
                <button @click="openModal"
                    class="p-2 border border-[#676E76] text-[#676E76] rounded-lg w-36 mt-5 text-xs">ლისტინგის
                    წაშლა</button>
            </div>
        </div>
        <div class="w-[52.4rem] flex justify-end text-gray-text mt-2">გამოქვეყნების თარიღი
            {{ listingStore.splitDate }}</div>
        <TheCarousel />
    </div>
</template>