<script setup>
import { useListingStore } from '@/stores/listings';
import { useModalStore } from '@/stores/modal/index'
import { useRoute } from 'vue-router';
import router from '@/router';
const props = defineProps(['background', 'title', 'type', 'routerTo', 'query'])
const route = useRoute()
const modalStore = useModalStore()
const listingStore = useListingStore()
const click = () => {
    if (props.query === 'agent') {
        modalStore.changeModal('agent')
        router.push({ path: '/', query: { modal: props.query } })
    }
    else if (props.query === 'remove-listing') {
        modalStore.changeModal(false)
        router.push({ name: 'home' })
        listingStore.removeListing(route.params.id)
    }
    else {
        modalStore.changeModal(false)
        router.push({ query: null })
    }
}
const clearLocalStorage = () => {
    localStorage.clear()
}
</script>

<template>
    <router-link @click="clearLocalStorage" :to="{ name: props.routerTo }" v-if="props.type === 'link'"
        :class="[props.background ? 'text-white  bg-button-background  hover:bg-button-background-hover' : 'bg-transparent hover:bg-button-background border border-button-background text-button-background hover:text-white']"
        class="px-4 py-[10px]  text-base font-medium rounded-[10px]"> {{ props.title
        }}</router-link>
    <button @click="click" v-else type="submit"
        :class="[props.background ? 'text-white bg-button-background hover:bg-button-background-hover' : 'bg-transparent hover:bg-button-background border border-button-background text-button-background hover:text-white']"
        class="px-4 py-[10px] h-12  text-base font-medium rounded-[10px]">{{ props.title }}
    </button>
</template>