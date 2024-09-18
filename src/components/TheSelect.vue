<template>
    <div class="flex h-20 flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }}</label>
        <Field v-if="props.label == 'რეგიონი'" as="select" type="select" validate-on-input
            class="h-11 p-2 shrink-0 rounded-lg border border-border-color" :name="props.name" :value="modelValue"
            @input="selectRegion" @change="change">
            <option value="" selected disabled>Select a region</option>
            <option v-for="region in estateStore.regions" :key="region.id" :value="region.id">
                {{ region.name }}</option>
        </Field>
        <Field @change="change" v-else-if="props.label == 'ქალაქი'" as="select" validate-on-input
            class="h-11 p-2 shrink-0 rounded-lg border border-border-color" :name="props.name" :value="modelValue">
            <option value="" selected disabled>Select a city</option>
            <option v-for="city in estateStore.cities" :key="city.id" :value="city.id">
                {{ city.name }}</option>
        </Field>
        <Field @change="change" v-else validate-on-input
            class="h-11 p-10 shrink-0 rounded-lg border border-border-color" :name="props.name" :value="modelValue">
            <div class="custom-select">
                <button type="button" @click="toggleDropdown" class="dropdown-toggle">
                    {{ selectedOption ? selectedOption : 'აირჩიეთ აგენტი' }}
                    <ArrowDown />
                </button>
                <ul v-if="isOpen" class="dropdown-menu">
                    <li @click="agentModal" class="dropdown-item">
                        <div>
                            <span class="text-black flex items-center">
                                <PlusIcon class="mr-2" />
                                დაამატე აგენტი
                            </span>
                        </div>
                    </li>
                    <li v-for="agent in estateStore.agents" :key="agent.id" @click="selectOption(agent)"
                        class="dropdown-item">
                        <div>
                            <span class="text-black">{{ agent.name }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </Field>
        <ErrorMessage :name="props.name" class="text-error" />
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
import { useEstateStore } from '@/stores';
import useLocalStorage from '@/composables/useLocalStorage';
const props = defineProps(['name', 'rules', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue', 'agent']);
import { ref } from 'vue';
import ArrowDown from './icons/ArrowDown.vue';
import PlusIcon from './icons/PlusIcon.vue';
import router from '@/router';
const isOpen = ref(false);
const selectedOption = ref(JSON.parse(localStorage.getItem('agent')) || "");

const agentModal = () => {
    estateStore.changeModal('agent')
    router.push({ query: { modal: 'agent' } })
}

const change = (e) => {
    if (e.target.value === 'agent') {
        estateStore.changeModal('agent')
    }
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}
const estateStore = useEstateStore()
const selectRegion = (e) => {
    estateStore.region_id = e.target.value
    estateStore.getCities()
}
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
    selectedOption.value = option.name;
    isOpen.value = false;
    emit('agent', option)
    useLocalStorage(option.name, props.name)
};
</script>


<style scoped>
.custom-select {
    position: relative;
    display: inline-block;
    width: 100%;
}

.dropdown-toggle {
    padding: 10px;
    width: 100%;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 200px;
    overflow: scroll;
    border: 1px solid #ccc;
    border-radius: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-item {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #f0f0f0;
}

.option-content {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 8px;
}
</style>