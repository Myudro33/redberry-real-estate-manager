<template>
    <div class="flex h-20  flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }} *</label>
        <Field validate-on-input v-slot="{ field, meta, errors }" :name="props.name" type="text" :value="modelValue"
            @input="change">
            <input class="h-11 p-2 shrink-0 rounded-lg border "
                :class="{ 'border border-error': meta.touched && !meta.valid }" type="text" v-bind="field">
            <span class="flex items-center h-5 shrink-0">
                <CheckIcon class="mr-2" :color="color(meta)" />
                <p :color="color(meta)" v-if="!errors[0]">{{ `${props.label} სავალდებულოა` }}</p>
                <ErrorMessage class="text-error" :name="props.name" />
            </span>
        </Field>
    </div>
</template>

<script setup>
import useLocalStorage from '@/composables/useLocalStorage';
import { ErrorMessage, Field } from 'vee-validate';
import CheckIcon from './icons/CheckIcon.vue';
const props = defineProps(['name', 'rules', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue']);
const change = (e) => {
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}

const color = (meta) => {
    if (meta.touched && !meta.valid) {
        return '#F15524'; // red when there is an error
    } else if (meta.touched && meta.valid) {
        return '#45A849'; // green when there are no errors
    }
    else {
        return '#021526'
    }
}
</script>