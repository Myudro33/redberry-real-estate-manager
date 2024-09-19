<template>
    <div class="w-full font-firago h-[10.875rem] mt-[3.12rem] border border-border-color rounded-lg py-6 px-5">
        <div class="flex">
            <img class="w-[4.5rem] h-[4.5rem] rounded-full object-cover" :src="props.agent.avatar" alt="agent-avatar">
            <div class="ml-2">
                <h1 class="font-normal text-[#021526] text-base">{{ `${props.agent.name} ${props.agent.surname}` }}</h1>
                <p class="text-gray-text text-sm font-normal">აგენტი</p>
            </div>
        </div>
        <p class="text-sm flex mt-4 items-center font-normal text-gray-text">
            <EmailIcon class="mr-2" /> {{ props.agent.email }}
        </p>
        <p class="text-sm flex mt-1 items-center font-normal text-gray-text">
            <PhoneIcon class="mr-2" /> {{ phoneNumber(props.agent.phone) }}
        </p>
    </div>
</template>


<script setup>
import EmailIcon from './icons/EmailIcon.vue';
import PhoneIcon from './icons/PhoneIcon.vue';
const props = defineProps(['agent'])

const phoneNumber = (number) => {
    let value = number.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    return value
}
</script>