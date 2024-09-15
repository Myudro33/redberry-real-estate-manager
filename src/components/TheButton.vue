<script setup>
import { useEstateStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps(['background', 'title', 'type', 'routerTo', 'query'])
const router = useRouter()
const route = useRoute()
const estateStore = useEstateStore()
const click = () => {
    if (props.query === 'agent') {
        estateStore.changeModal('agent')
        router.push({ path: '/', query: { modal: props.query } })
    }
    else if (props.query === 'remove-listing') {
        estateStore.removeListing(route.params.id)
        estateStore.changeModal(false)
        router.push({ name: 'home' })
    }
    else {
        estateStore.changeModal(false)
        router.push({ query: null })
    }
}
</script>

<template>
    <router-link :to="{ name: props.routerTo }" v-if="props.type === 'link'"
        :class="[props.background ? 'text-white bg-button-background hover:bg-button-background-hover' : 'bg-transparent hover:bg-button-background border border-button-background text-button-background hover:text-white']"
        class="px-4 py-[10px] h-12 text-base font-medium rounded-[10px]">{{ props.title
        }}</router-link>
    <button @click="click" v-else type="submit"
        :class="[props.background ? 'text-white bg-button-background hover:bg-button-background-hover' : 'bg-transparent hover:bg-button-background border border-button-background text-button-background hover:text-white']"
        class="px-4 py-[10px] h-12 text-base font-medium rounded-[10px]">{{ props.title }}
    </button>
</template>