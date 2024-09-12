<script setup>
import TheNavbar from '@/components/TheNavbar.vue';
import { useEstateStore } from '@/stores';
import { onMounted } from 'vue';
const estateStore = useEstateStore()
onMounted(() => {
  estateStore.getRegions()
})
</script>

<template>
  <div class="w-full px-40">
    <TheNavbar />
  </div>
</template>
