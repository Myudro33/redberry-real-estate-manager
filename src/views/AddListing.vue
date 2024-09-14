<template>
    <div class="w-full flex flex-col items-center p-14 mt-14">
        <h1 class="text-center text-[2rem] font-semibold">ლისტინგის დამატება</h1>
        <Form :validation-schema="schema" class="w-[49.3rem] mt-14" @submit="handleSubmit(onSubmit)">
            <div>
                <div>
                    <h1 class="font-medium text-base">გარიგების ტიპი</h1>
                    <label for="deal" class="mt-2">
                        <Field name="deal" type="radio" value="sell" /> იყიდება
                    </label>
                    <label class="ml-6 mt-2" for="deal">
                        <Field name="deal" type="radio" value="rent" /> ქირავდება
                    </label>
                </div>
                <ErrorMessage class="text-error" name="deal" />
            </div>
            <h1 class="mt-20 font-medium text-base">მდებარეობა</h1>
            <div class="flex justify-between flex-wrap mt-6">
                <TheInput class="w-[24rem] mt-2" label="მისამართი *" name="address" />
                <TheInput class="w-[24rem] mt-2 " label="საფოსტო ინდექსი *" name="postalCode" />
                <TheSelect class="w-[24rem] mt-2 " label="რეგიონი" name="region" />
                <TheSelect class="w-[24rem] mt-2 " label="ქალაქი" name="city" />
            </div>
            <h1 class="mt-20 font-medium text-base">ბინის დეტალები</h1>
            <div class="flex justify-between flex-wrap">
                <TheInput class="w-[24rem] mt-2" label="ფასი *" name="price" />
                <TheInput class="w-[24rem] mt-2 " label="ფართობი *" name="area" />
                <TheInput class="w-[24rem] mt-5 " label="საძინებლების რაოდენობა *" name="bedrooms" />
                <TheTextarea class="w-full mt-5" label="აღწერა *" name="description" />
                <TheFileInput name="file" />
            </div>
            <h1 class="mt-20 font-medium text-base">აგენტი</h1>
            <TheSelect class="w-[24rem] mt-2 " label="აირჩიე" name="agent" />
            <div class="w-full flex justify-end mt-10">
                <TheButton router-to="home" type="link" title="გაუქმება" />
                <TheButton class="ml-4" :background="true" title="დამატე ლისტინგი" />
            </div>
        </Form>
    </div>
</template>

<script setup>
import { useForm, Form, Field, ErrorMessage } from 'vee-validate';
import TheInput from '@/components/TheInput.vue';
import TheSelect from '@/components/TheSelect.vue';
import TheTextarea from '@/components/TheTextarea.vue';
import TheFileInput from '@/components/TheFileInput.vue';
import { schema } from '@/config/vee-validate/rules';
import TheButton from '@/components/TheButton.vue';
import { useEstateStore } from '@/stores';
import { onMounted } from 'vue';
const { handleSubmit } = useForm();
const estateStore = useEstateStore()
onMounted(() => {
    estateStore.getAgents()
    estateStore.getRegions()

})
function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
}
</script>