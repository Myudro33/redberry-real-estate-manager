<template>
    <div class="mt-[4.19rem] w-full relative">
        <h1 class="text-[#021526] text-[2rem] font-medium">ბინები მსგავს ლოკაციაზე</h1>
        <div class="carousel-container w-full mt-[3.25rem]" @mouseover="pauseAutoSlide" @mouseleave="startAutoSlide">
            <div class="carousel" :style="{ transform: `translateX(${-translateX}px)` }">
                <div class="carousel-item" v-for="items in displayItems" :key="items.id">
                    <ListingCard :area="items.area" :bedrooms="items.bedrooms" :deal="items.is_rental" :id="items.id"
                        :image="items.image" :location="items.address" :postal-code="items.zip_code"
                        :price="items.price" />
                </div>
            </div>
        </div>
        <button class="absolute" @click="prev">
            <ArrowIcon />
        </button>
        <button @click="next">
            <ArrowIcon class="rotate-180" />
        </button>
    </div>
</template>

<script setup>
import { useEstateStore } from '@/stores';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ListingCard from './ListingCard.vue';
import ArrowIcon from './icons/ArrowIcon.vue';
const estateStore = useEstateStore()
const items = ref(estateStore.listings);
const currentIndex = ref(0);
const translateX = ref(0);
const itemWidth = 380;
const itemsToShow = 4;
let autoSlideInterval = null;

const displayItems = computed(() => {
    return [
        ...items.value.slice(-itemsToShow),
        ...items.value,
        ...items.value.slice(0, itemsToShow),
    ];
});

const next = () => {
    currentIndex.value++;
    if (currentIndex.value >= items.value.length) {
        currentIndex.value = 0;
        translateX.value = 0;
        translateX.value = translateX.value * itemWidth
    } else {
        if (currentIndex.value === 1) {
            translateX.value = currentIndex.value * itemWidth + (currentIndex.value * 10)
        } else {
            translateX.value = currentIndex.value * itemWidth + (currentIndex.value * 15)
        }
    }

};

const prev = () => {
    currentIndex.value--;
    if (currentIndex.value < 0) {
        currentIndex.value = items.value.length - 1;
        translateX.value = currentIndex.value * itemWidth;
    } else {
        if (currentIndex.value === 1) {
            translateX.value = currentIndex.value * itemWidth + (currentIndex.value * 10)
        } else {
            translateX.value = currentIndex.value * itemWidth + (currentIndex.value * 15)
        }
    }
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        next()
    }, 3000);
};

const pauseAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

onMounted(() => {
    startAutoSlide();
});

onBeforeUnmount(() => {
    pauseAutoSlide();
});

</script>

<style scoped>
.carousel-container {
    position: relative;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 10px;
}

.carousel-item {
    min-width: 387px;
    min-height: 300px;
    flex-shrink: 0;
}

button {
    position: absolute;
    top: 50%;
    border: none;
    cursor: pointer;
    padding: 10px;
}

button:nth-of-type(1) {
    left: -60px;
}

button:nth-of-type(2) {
    right: -60px;
}
</style>