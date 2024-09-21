<template>
    <div class="flex  flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }} *</label>
        <Field v-slot="{ field, meta }" validate-on-input :name="props.name" :rules="props.rules" @input="change"
            :value="modelValue">
            <textarea v-bind="field" :class="{ 'border border-error': meta.touched && !meta.valid }"
                class="h-32 resize-none p-2 rounded-lg border border-border-color">
        </textarea>
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