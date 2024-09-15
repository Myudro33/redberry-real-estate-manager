<script setup>
import { RouterView, useRouter } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import ModalContainer from './components/modal/ModalContainer.vue';
import { useEstateStore } from './stores';
import { onMounted } from 'vue';
const estateStore = useEstateStore()
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    if (router.currentRoute.value.query.modal == 'agent') {
      estateStore.changeModal('agent')
    }
  });
})
</script>

<template>
  <div :class="{ 'overflow-hidden h-screen': estateStore.modal }">
    <TheHeader />
    <RouterView />
    <ModalContainer />
  </div>
</template>
