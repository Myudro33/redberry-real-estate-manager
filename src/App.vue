<script setup>
import { RouterView, useRouter } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
import ModalContainer from './components/modal/ModalContainer.vue';
import { onMounted } from 'vue';
import { useModalStore } from './stores/modal';
const router = useRouter()
const modalStore = useModalStore()
onMounted(() => {
  setTimeout(() => {
    if (router.currentRoute.value.query.modal == 'agent') {
      modalStore.changeModal('agent')
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
