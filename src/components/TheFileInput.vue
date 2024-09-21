<template>
    <Field v-slot="{ field, meta }" :rules="required" name="image">
        <label class="mt-[1.375rem] mb-1  text-sm font-semibold">ატვირთეთ ფოტო *</label>
        <div v-bind="field" v-if="!props.mode" :class="[
            active ? 'border-2  bg-[#41b88380]' : 'border border-[#6c757d]-1',
            !meta.valid && meta.touched ? 'border-1 border-error' : 'border-[#6c757d]-1',
            meta.valid && meta.touched ? 'border-1  border-success' : '',
        ]" class="w-full flex items-center h-[7.5rem] border-dashed  rounded-sm  justify-start">
            <div class="flex flex-col items-center w-full h-full">
                <label
                    class="text-xl relative w-full h-full flex justify-center items-center cursor-pointer rounded-md "
                    for="dropzoneFile">
                    <div @click.stop>
                        <TrashCanIcon @click="removeImage" class="absolute translate-x-16 translate-y-16 cursor-pointer"
                            v-if="file" />
                        <img v-if="file" class="w-20 h-20 rounded-md" :src="file" alt="created image">
                    </div>
                    <PlusIcon v-if="!file" />
                </label>
                <input accept=".jpg,.jpeg,.png" name='file' v-if="!dropzoneFile.name" @input="selectedFile"
                    class="hidden" type="file" id="dropzoneFile" />
            </div>
        </div>
        <ErrorMessage name="file" class="text-error" />
    </Field>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";
import { onMounted, ref } from "vue";
import PlusIcon from "./icons/PlusIcon.vue";
import TrashCanIcon from "./icons/TrashCanIcon.vue";
import { useConvertToBase64, useBase64ToFile, useRetrieveFile } from "@/composables/useImage";
const active = ref(false);
const dropzoneFile = ref("");
const file = ref("")
const emit = defineEmits(["selectFile"]);
const props = defineProps(["image"]);
const convertToBase64 = (image) => {
    useConvertToBase64(image, file)
};
const retrieveFile = () => {
    const base64Data = localStorage.getItem('file');
    useRetrieveFile(file)
    if (base64Data?.startsWith('data')) {
        emit('selectFile', useBase64ToFile(base64Data, 'downloaded-file'))
    }
};
const selectedFile = (e) => {
    dropzoneFile.value = e.target.files[0];
    emit("selectFile", dropzoneFile.value);
    convertToBase64(e.target.files[0])
};
const removeImage = () => {
    setTimeout(() => {
        file.value = ''
        dropzoneFile.value = ''
        localStorage.removeItem("file");
        emit('selectFile', '')
    });
}
onMounted(() => {
    retrieveFile()
})
</script>