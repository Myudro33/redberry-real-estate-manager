<template>
    <Field v-slot="{ field, meta }" :rules="required" name="image">
        <label class="mt-[1.375rem] mb-1 font-medium text-sm">ატვირთეთ ფოტო *</label>
        <div v-bind="field" v-if="!props.mode" @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive"
            @dragover.prevent @drop.prevent="toggleActive" :class="[
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
import useLocalStorage from "@/composables/useLocalStorage";
import { useEstateStore } from "@/stores";
const active = ref(false);
const dropzoneFile = ref("");
const file = ref(JSON.parse(localStorage.getItem('file')) || "")
const emit = defineEmits(["selectFile"]);
const props = defineProps(["image"]);
const estateStore = useEstateStore()
const toggleActive = async (e) => {
    active.value = !active.value;
    dropzoneFile.value = e.dataTransfer.files[0];
    emit("selectFile", dropzoneFile);
    const fileContent = new Blob([dropzoneFile.value], {
        type: "image/jpeg",
    });
    const newFile = new File([fileContent], "AtomicHeart_sample.jpg", {
        type: "image/jpeg",
        lastModified: 1701010799085
    });
    file.value = URL.createObjectURL(newFile);
    const base64Data = await estateStore.convertBlobToBase64(newFile);
    useLocalStorage(base64Data, 'image');
    useLocalStorage(file.value, 'file')

};
const selectedFile = (e) => {
    dropzoneFile.value = e.target.files[0];
    emit("selectFile", dropzoneFile);
    const fileContent = new Blob([dropzoneFile.value], {
        type: "image/jpeg",
    });
    const newFile = new File([fileContent], "AtomicHeart_sample.jpg", {
        type: "image/jpeg",
        lastModified: 1701010799085
    });
    file.value = URL.createObjectURL(newFile);
    const base64Data = estateStore.convertBlobToBase64(newFile);
    useLocalStorage(base64Data, 'image');
    useLocalStorage(file.value, 'file')
};
const removeImage = () => {
    setTimeout(() => {
        file.value = ''
        dropzoneFile.value = ''
        useLocalStorage('', 'image');
        useLocalStorage('', 'file')
    });
}
const loadImageFromLocalStorage = () => {
    const base64Image = localStorage.getItem('image');
    if (base64Image) {
        estateStore.urltoFile(base64Image, 'imagename', 'image/jpeg');
    }
};
onMounted(() => {
    loadImageFromLocalStorage();
})
</script>