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
        <Field @change="change" v-else as="select" validate-on-input
            class="h-11 p-2 shrink-0 rounded-lg border border-border-color" :name="props.name" :value="modelValue">
            <option value="" selected disabled>Select an agent</option>
            <option v-for="agent in estateStore.agents" :key="agent.id" :value="agent.id">
                {{ agent.name }}</option>
        </Field>
        <ErrorMessage :name="props.name" class="text-error" />
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
import { useEstateStore } from '@/stores';
import useLocalStorage from '@/composables/useLocalStorage';
const props = defineProps(['name', 'rules', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue']);
const change = (e) => {
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}
const estateStore = useEstateStore()
const selectRegion = (e) => {
    estateStore.region_id = e.target.value
    estateStore.getCities()
}
</script>