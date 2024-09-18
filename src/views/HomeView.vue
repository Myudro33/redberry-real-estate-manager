<script setup>
import ListingCard from '@/components/ListingCard.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import { useEstateStore } from '@/stores';
import { useListingStore } from '@/stores/listings';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const listingStore = useListingStore()
const router = useRoute()
const estateStore = useEstateStore()
const bedrooms = ref(router.query.bedrooms || "")
const regions = ref(router.query.regions || [])
const price = ref({ min: router.query.min_price || 0, max: router.query.max_price || 0 })
const area = ref({ min: router.query.min_area || 0, max: router.query.max_area || 0 })
onMounted(() => {
  listingStore.getListing()
  estateStore.getRegions()
})
const filteredListings = computed(() => {
  let listings = listingStore.listings
  if (bedrooms.value !== '') {
    listings = listings.filter((item) => item.bedrooms == bedrooms.value)
  }
  if (regions.value.length > 0) {
    listings = listings.filter((item) => regions.value.includes(item.city.region.name))
  }
  if (price.value.min !== 0 || price.value.max !== 0) {
    listings = listings.filter((item) => {
      const minCondition = price.value.min === 0 || item.price >= price.value.min;
      const maxCondition = price.value.max === 0 || item.price <= price.value.max;
      return minCondition && maxCondition;
    });
  }
  if (area.value.min !== 0 || area.value.max !== 0) {
    listings = listings.filter((item) => {
      const minCondition = area.value.min === 0 || item.area >= area.value.min;
      const maxCondition = area.value.max === 0 || item.area <= area.value.max;
      return minCondition && maxCondition;
    });
  }
  return listings
})
const filterByBedrooms = (e) => {
  bedrooms.value = e
}
const filterByRegions = (e) => {
  regions.value = [...e]
}
const filterByPrice = (e) => {
  price.value.min = Number(e.min)
  price.value.max = Number(e.max)
}
const filterByArea = (e) => {
  area.value.min = Number(e.min)
  area.value.max = Number(e.max)
}
</script>

<template>
  <div class="w-full px-40 pb-20">
    <TheNavbar @bedroomQuantity="filterByBedrooms" @region="filterByRegions" @price="filterByPrice"
      @area="filterByArea" />
    <div class="flex flex-wrap gap-3 mt-8">
      <ListingCard v-for="items in filteredListings" :key="items.id" :area="items.area" :bedrooms="items.bedrooms"
        :deal="items.is_rental" :id="items.id" :image="items.image" :location="items.address"
        :postal-code="items.zip_code" :price="items.price" :city="items.city.name" />
    </div>
  </div>
</template>
