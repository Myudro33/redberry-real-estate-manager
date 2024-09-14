<template>
    <div class="flex h-20  flex-col">
        <label class="font-semibold text-sm" :for="props.name">{{ props.label }}</label>
        <Field validate-on-change :name="props.name" :rules="props.rules" v-slot="{ field }">
            <input class="h-11 p-2 shrink-0 rounded-lg border border-border-color" v-bind="field" type="text"
                :name="props.name" />
            <ErrorMessage class="text-error" :name="props.name" />
        </Field>
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
const props = defineProps(['name', 'rules', 'label'])
</script>