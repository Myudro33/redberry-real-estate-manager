<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import ModalContainer from './components/modal/ModalContainer.vue';
import { onMounted } from 'vue';
import { useModalStore } from './stores/modal';
import router from './router';
const modalStore = useModalStore()
onMounted(() => {
  setTimeout(() => {
    if (router.currentRoute.value.query.modal == 'agent') {
      modalStore.changeModal('agent')
    }
    if (router.currentRoute.value.query.modal == 'remove-listing') {
      modalStore.changeModal('remove-listing')
    }
  });
})
</script>

<template>
  <div :class="{ 'overflow-hidden h-screen': modalStore.modal }">
    <TheHeader />
    <RouterView />
    <ModalContainer />
  </div>
</template>
