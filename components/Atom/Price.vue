<template>
    <div
        class="flex justify-between py-5 items-center desktop:w-2/3 desktop:flex-col desktop:items-start"
    >
        <div class="flex space-x-5 items-center">
            <span class="font-bold text-3xl">${{ formatPrice(price) }}</span>
            <span
                v-if="discount"
                class="inline-block text-primary-ornage font-bold rounded-xl bg-primary-pale-orange px-2 py-1"
            >{{ discount }}%</span>
        </div>
        <span
            v-if="originalPrice"
            class="line-through text-neutral-grayish-blue font-bold"
        >${{ formatPrice(originalPrice) }}</span>
    </div>
</template>
<script setup lang="ts">
defineProps({
    price: {
        type: [Number, String],
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    originalPrice: {
        type: Number,
        required: false
    }
})
const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>