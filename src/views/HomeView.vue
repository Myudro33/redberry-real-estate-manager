<script setup>
import ListingCard from '@/components/ListingCard.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import { useEstateStore } from '@/stores';
import { onMounted } from 'vue';
const estateStore = useEstateStore()
onMounted(() => {
  estateStore.getListing()
})
</script>

<template>
  <div class="w-full px-40 pb-20">
    <TheNavbar />
    <div class="flex justify-between flex-wrap gap-3 mt-8">
      <ListingCard v-for="items in estateStore.listings" :key="items.id" :area="items.area" :bedrooms="items.bedrooms"
        :deal="items.is_rental" :id="items.id" :image="items.image" :location="items.address"
        :postal-code="items.zip_code" :price="items.price" />
    </div>
  </div>
</template>
