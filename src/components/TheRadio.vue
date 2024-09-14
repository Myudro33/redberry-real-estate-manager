<template>
    <div class="mt-2 flex flex-col">
        <label :for="props.name">
            <Field validate-on-input :value="modelValue" :name="props.name" v-slot="{ field }">
                <input v-bind="field" :checked="radio == props.value" @change="change" :value="props.value" type="radio"
                    :name="props.name">
            </Field>
            {{ props.label }}
        </label>
    </div>
</template>

<script setup>
import useLocalStorage from '@/composables/useLocalStorage';
import { Field } from 'vee-validate';
import { ref } from 'vue';
const props = defineProps(['name', 'label', 'modelValue', 'value'])
const emit = defineEmits(['update:modelValue']);
const radio = ref(JSON.parse(localStorage.getItem('deal')) || "")
const change = (e) => {
    emit('update:modelValue', e.target.value)
    useLocalStorage(e.target.value, props.name)
}
</script>