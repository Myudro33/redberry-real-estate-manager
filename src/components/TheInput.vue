<template>
    <div class="flex h-20  flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }}</label>
        <Field validate-on-input class="h-11 p-2 shrink-0 rounded-lg border border-border-color" :name="props.name"
            type="text" :value="modelValue" @input="change" />
        <ErrorMessage class="text-[#F15524]" :name="props.name" />
    </div>
</template>

<script setup>
import useLocalStorage from '@/composables/useLocalStorage';
import { ErrorMessage, Field } from 'vee-validate';
const props = defineProps(['name', 'rules', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue']);
const change = (e) => {
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}
</script>