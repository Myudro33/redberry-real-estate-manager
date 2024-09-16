<script setup>
import { ref } from 'vue';
import TheButton from '../TheButton.vue';
const props = defineProps(['filterType'])
const prices = ref({
    min: '',
    max: ''
})
const fixedPrices = ref([
    { price: 50000 }, { price: 100000 }, { price: 150000 }, { price: 200000 }, { price: 300000 }
])

const setPrice = (type, quantity) => {
    prices.value[type] = quantity
}

</script>

<template>
    <div :class="[props.filterType === 'price' ? 'left-28' : 'left-80']"
        class="flex z-50 flex-col bg-white w-[23.8rem] p-6 rounded-lg border border-border-color shadow-box-shadow h-96 absolute top-14 ">
        <h1 class="fo">{{ props.filterType === 'price' ? 'ფასის მიხედვით' : 'ფართობის მიხედვით' }}</h1>
        <div class="w-full flex justify-between mt-6 text-base font-thin  ">
            <input name="min" v-model="prices.min" class=" w-[9.6rem] h-11 p-2 border border-input-border rounded-md "
                placeholder="დან" type="text">
            <label class="absolute right-52 font-bold top-20" for="min">{{ props.filterType === 'price' ? '₾' : 'მ²'
                }}</label>
            <input v-model="prices.max" class="w-[9.6rem] h-11 p-2 border border-input-border rounded-md "
                placeholder="მდე" type="text">
            <label class="absolute right-8 font-bold top-20" for="min">{{ props.filterType === 'price' ? '₾' : 'მ²'
                }}</label>

        </div>
        <div class="flex justify-between mt-4 text-[#2D3648]">
            <div class=" flex flex-col w-2/5 font-normal">
                <h1 class="font-bold">{{ props.filterType === 'price' ? 'მინ. ფასი' : 'მინ. მ²' }}
                </h1>
                <span @click="setPrice('min', item.price)" v-for="(item, index) in fixedPrices" :key="index"
                    class="first:mt-2 mt-1 cursor-pointer">{{
                        item.price.toLocaleString() }} {{
                        props.filterType ===
                            'price' ? '₾' :
                            'მ²' }}</span>
            </div>
            <div class=" flex flex-col w-2/5 font-normal">
                <h1 class="font-bold">{{ props.filterType === 'price' ? 'მაქს. ფასი' : 'მინ. მ²' }}</h1>
                <span @click="setPrice('max', item.price)" v-for="(item, index) in fixedPrices" :key="index"
                    class="first:mt-2 mt-1 cursor-pointer">{{
                        item.price.toLocaleString() }} {{
                        props.filterType ===
                            'price' ? '₾' :
                            'მ²' }}</span>
            </div>
        </div>
        <div class="w-full flex justify-end mt-auto">
            <TheButton :background="true" title="არჩევა" />
        </div>
    </div>
</template>
