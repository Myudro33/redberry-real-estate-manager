<template>
    <div class="flex h-20 flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }}</label>
        <Field validate-on-change :name="props.name" :rules="props.rules" v-slot="{ value, field }">
            <select v-bind="field" :name="props.name" @change="selectRegion" v-if="props.label == 'რეგიონი'"
                class="h-11 shrink-0 p-2 rounded-lg border border-border-color">
                <option value="" selected disabled>Select a region</option>
                <option v-for="region in estateStore.regions" :key="region.id" :value="region.id">
                    {{ region.name }}</option>
            </select>
            <select v-bind="field" v-else-if="props.label == 'ქალაქი'"
                class="h-11 shrink-0 p-2 rounded-lg border border-border-color" :name="props.name">
                <option value="" selected disabled>Select a city</option>
                <option v-for="city in estateStore.cities" :key="city.id" :value="city.name">
                    {{ city.name }}</option>
            </select>
            <select v-bind="field" v-else class="h-11 shrink-0 p-2 rounded-lg border border-border-color"
                :name="props.name">
                <option value="" selected disabled>Select an agent</option>
                <option v-for="agent in estateStore.agents" :key="agent.id" :value="agent.name"
                    :selected="value && value.includes(agent.name)">
                    {{ agent.name }}</option>
            </select>
            <ErrorMessage class="text-error" :name="props.name" />
        </Field>
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
import { useEstateStore } from '@/stores';
const props = defineProps(['name', 'rules', 'label'])
const estateStore = useEstateStore()
const selectRegion = (e) => {
    estateStore.region_id = e.target.value
    estateStore.getCities()
}
</script>