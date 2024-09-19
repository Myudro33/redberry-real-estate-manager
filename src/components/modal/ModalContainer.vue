<template>
    <div v-if="modalStore.modal == 'agent' || modalStore.modal == 'remove-listing'" @click="closeModal"
        class="modal-overlay">
        <AddAgentForm @click.stop v-if="modalStore.modal == 'agent'" />
        <RemoveListing v-else />
    </div>
</template>

<script setup>
import router from '@/router';
import AddAgentForm from './AddAgentForm.vue';
import RemoveListing from './RemoveListing.vue';
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore()
const closeModal = () => {
    router.push({ query: null })
    modalStore.changeModal(false)
}
</script>


<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
}

.modal-content {
    background: white;
    z-index: 1001;
}
</style>