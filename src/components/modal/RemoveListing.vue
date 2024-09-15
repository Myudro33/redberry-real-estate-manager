<template>
    <div @click.stop class="w-[39rem] h-[14rem] bg-white rounded-xl shadow-md flex flex-col items-center py-5 px-5">
        <div class="w-full flex justify-end ">
            <DeleteIcon @click="closeModal" class="w-7 h-7 cursor-pointer" />
        </div>
        <h1 class="text-xl font-normal mt-4">გსურთ წაშალოთ ლისტინგი?</h1>
        <div class="mt-10">
            <TheButton class="ml-4" :background="false" title="გაუქმება" />
            <TheButton class="ml-4" :background="true" title="დადასტურება" query="remove-listing" />
        </div>
    </div>
</template>

<script setup>
import { useEstateStore } from '@/stores';
import DeleteIcon from '../icons/DeleteIcon.vue';
import TheButton from '../TheButton.vue';
import { useRouter } from 'vue-router';
const estateStore = useEstateStore()
const router = useRouter()
const closeModal = () => {
    estateStore.changeModal(false)
    router.push({ query: null })
}
</script>