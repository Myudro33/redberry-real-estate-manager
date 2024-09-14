<template>
    <div class="flex  flex-col">
        <label class="font-semibold" :for="props.name">{{ props.label }}</label>
        <Field validate-on-input as="textarea" class="h-32 p-2 rounded-lg border border-border-color" :name="props.name"
            :rules="props.rules" @input="change" :value="modelValue">
        </Field>
        <ErrorMessage class="text-red-500" :name="props.name" />
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
import useLocalStorage from '@/composables/useLocalStorage';
const props = defineProps(['name', 'rules', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue']);
const change = (e) => {
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}
</script>