<template>
    <div class="flex  flex-col">
        <label class="font-semibold" :for="props.name">{{ props.label }}</label>
        <Field validate-on-change :name="props.name" :rules="props.rules" v-slot="{ field }">
            <textarea class="h-32 p-2 rounded-lg border border-border-color" v-bind="field" type="text"
                :name="props.name"></textarea>
            <ErrorMessage class="text-red-500" :name="props.name" />
        </Field>
    </div>
</template>

<script setup>
import { ErrorMessage, Field } from 'vee-validate';
const props = defineProps(['name', 'rules', 'label'])
</script>