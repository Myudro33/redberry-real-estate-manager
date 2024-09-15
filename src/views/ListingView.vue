<script setup>
import AgentCard from '@/components/AgentCard.vue';
import AreaIcon from '@/components/icons/AreaIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import BedIcon from '@/components/icons/BedIcon.vue';
import LocationIcon from '@/components/icons/LocationIcon.vue';
import PostIcon from '@/components/icons/PostIcon.vue';
import TheCarousel from '@/components/TheCarousel.vue';
import { useEstateStore } from '@/stores';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const router = useRoute()
const estateStore = useEstateStore()
onMounted(() => {
    estateStore.getListing()
    estateStore.getSingleListing(router.params.id)
})
</script>

<template>
    <h1 class="text-5xl text-center font-bold" v-if="estateStore.loading">loading...</h1>
    <div v-else-if="estateStore.singleListing.id" class="px-40 py-16">
        <router-link :to="{ name: 'home' }">
            <ArrowIcon />
        </router-link>
        <div class="w-full flex  mt-7">
            <img class="w-[52.4rem] h-[41.8rem] rounded-lg object-fill" :src="estateStore.singleListing.image"
                alt="listing-image">
            <div class="flex flex-col w-[31.4rem] ml-[4.25rem] text-2xl text-gray-text font-normal">
                <h1 class="font-bold text-5xl text-[#021526]">{{ estateStore.singleListing.price }} ₾
                </h1>
                <span class="flex items-center mt-5">
                    <LocationIcon class="w-5 mr-2" /> {{ `${estateStore.singleListing.city.name},
                    ${estateStore.singleListing.address} `
                    }}
                </span>
                <span class="flex items-center mt-4">
                    <AreaIcon class="w-5 mr-2" /> {{ estateStore.singleListing.area }} მ²
                </span>
                <span class="flex items-center mt-4">
                    <BedIcon class="w-5 mr-2" /> საძინებელი {{ estateStore.singleListing.bedrooms }}
                </span>
                <span class="flex items-center mt-4">
                    <PostIcon class="w-5 mr-2" /> საფოსტო ინდექსი {{ estateStore.singleListing.bedrooms }}
                </span>
                <p class="text-base text-gray-text font-normal mt-10 ">{{ estateStore.singleListing.description }}</p>
                <AgentCard :agent="estateStore.singleListing.agent" />
            </div>
        </div>
        <div class="w-[52.4rem] flex justify-end text-gray-text mt-2">გამოქვეყნების თარიღი
            {{ estateStore.splitDate }}</div>
        <TheCarousel />
    </div>
</template>