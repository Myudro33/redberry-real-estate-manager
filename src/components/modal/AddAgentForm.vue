<script setup lang="ts">
import { Form } from 'vee-validate';
import TheInput from '../TheInput.vue';
import { ref } from 'vue';
import TheFileInput from '../TheFileInput.vue';
import TheButton from '../TheButton.vue';
import { agentSchema } from '@/config/vee-validate/rules';
import { useEstateStore } from '@/stores';
import { useRouter } from 'vue-router';
const router = useRouter()
const data = ref({
    name: JSON.parse(localStorage.getItem('name')) || "",
    surname: JSON.parse(localStorage.getItem('surname')) || "",
    email: JSON.parse(localStorage.getItem('email')) || "",
    number: JSON.parse(localStorage.getItem('number')) || "",
    file: JSON.parse(localStorage.getItem('file')) || ""
})
const estateStore = useEstateStore()
const addAgent = () => {
    estateStore.addAgent(data.value)
    localStorage.clear()
    router.push({ name: 'home' })

}
const closeModal = () => {
    estateStore.modal = false
}

</script>

<template>
    <div class="w-[63rem] h-[49rem] bg-white rounded-xl shadow-md flex flex-col items-center py-20 px-[6.56rem]">
        <h1 class="text-[2rem] font-medium">აგენტის დამატება</h1>
        <Form @submit="addAgent" :validation-schema="agentSchema" class="mt-[3.8rem] w-full flex flex-wrap gap-4">
            <TheInput v-model="data.name" class="w-[24rem] h-24  mt-2" label="სახელი *" name="name" />
            <TheInput v-model="data.surname" class="w-[24rem] h-24 mt-2" label="გვარი *" name="surname" />
            <TheInput v-model="data.email" class="w-[24rem] h-24 mt-2" label="ელ-ფოსტა *" name="email" />
            <TheInput v-model="data.number" class="w-[24rem] h-24 mt-2" label="ტელეფონის ნომერი *" name="number" />
            <div class="w-full h-24 mt-8">
                <TheFileInput v-model="data.file" name="file" />
            </div>
            <div class="w-full flex justify-end mt-20">
                <TheButton @click="closeModal" router-to="home" type="link" title="გაუქმება" />
                <TheButton class="ml-4" :background="true" title="დამატე აგენტი" query="" />
            </div>
        </Form>
    </div>
</template>