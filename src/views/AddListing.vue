<template>
    <div class="w-full flex flex-col items-center p-14 mt-14">
        <h1 class="text-center text-[2rem] font-semibold">ლისტინგის დამატება</h1>
        <Form :validation-schema="schema" class="w-[49.3rem] mt-14" @submit="onSubmit">
            <div>
                <div>
                    <h1 class="font-medium text-base">გარიგების ტიპი</h1>
                    <div class="flex">
                        <TheRadio v-model="data.listing_type" name="deal" label="იყიდება" value="0" />
                        <TheRadio class="ml-4" v-model="data.listing_type" name="deal" label="ქირავდება" value="1" />
                    </div>
                </div>
                <ErrorMessage class="text-error" name="deal" />
            </div>
            <h1 class="mt-20 font-medium text-base">მდებარეობა</h1>
            <div class="flex justify-between flex-wrap mt-6">
                <TheInput v-model="data.address" class="w-[24rem] mt-2" label="მისამართი *" name="address" />
                <TheInput v-model="data.postalCode" class="w-[24rem] mt-2 " label="საფოსტო ინდექსი *"
                    name="postalCode" />
                <TheSelect v-model="data.region" class="w-[24rem] mt-2 " label="რეგიონი" name="region" />
                <TheSelect v-model="data.city" class="w-[24rem] mt-2 " label="ქალაქი" name="city" />
            </div>
            <h1 class="mt-20 font-medium text-base">ბინის დეტალები</h1>
            <div class="flex justify-between flex-wrap">
                <TheInput v-model="data.price" class="w-[24rem] mt-2" label="ფასი *" name="price" />
                <TheInput v-model="data.area" class="w-[24rem] mt-2 " label="ფართობი *" name="area" />
                <TheInput v-model="data.bedrooms" class="w-[24rem] mt-5 " label="საძინებლების რაოდენობა *"
                    name="bedrooms" />
                <TheTextarea v-model="data.description" class="w-full mt-5" label="აღწერა *" name="description" />
                <TheFileInput v-model="data.file" name="file" />
            </div>
            <h1 class="mt-20 font-medium text-base">აგენტი</h1>
            <TheSelect v-model="data.agent" class="w-[24rem] mt-2 " label="აირჩიე" name="agent" />
            <div class="w-full flex justify-end mt-10">
                <TheButton router-to="home" type="link" title="გაუქმება" />
                <TheButton class="ml-4" :background="true" title="დამატე ლისტინგი" />
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, ErrorMessage } from 'vee-validate';
import TheInput from '@/components/TheInput.vue';
import TheSelect from '@/components/TheSelect.vue';
import TheTextarea from '@/components/TheTextarea.vue';
import TheFileInput from '@/components/TheFileInput.vue';
import { schema } from '@/config/vee-validate/rules';
import TheButton from '@/components/TheButton.vue';
import { useEstateStore } from '@/stores';
import { onMounted, ref } from 'vue';
import TheRadio from '@/components/TheRadio.vue';
const estateStore = useEstateStore()
const data = ref({
    listing_type: JSON.parse(localStorage.getItem('deal')) || "",
    address: JSON.parse(localStorage.getItem('address')) || "",
    postalCode: JSON.parse(localStorage.getItem('postalCode')) || "",
    region: JSON.parse(localStorage.getItem('region')) || "",
    city: JSON.parse(localStorage.getItem('city')) || "",
    price: JSON.parse(localStorage.getItem('price')) || "",
    area: JSON.parse(localStorage.getItem('area')) || "",
    bedrooms: JSON.parse(localStorage.getItem('bedrooms')) || "",
    description: JSON.parse(localStorage.getItem('description')) || "",
    file: JSON.parse(localStorage.getItem('file')) || "",
    agent: JSON.parse(localStorage.getItem('agent')) || "",

})
onMounted(() => {
    estateStore.getAgents()
    estateStore.getRegions()
    if (estateStore.region_id) {
        estateStore.getCities()
    }
})
function onSubmit(values) {
    alert(JSON.stringify(values, null, 2));
}
</script>