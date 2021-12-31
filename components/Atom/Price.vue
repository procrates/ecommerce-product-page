<template>
    <div
        class="flex items-center justify-between py-5 desktop:w-2/3 desktop:flex-col desktop:items-start"
    >
        <div class="flex items-center space-x-5">
            <span class="text-3xl font-bold">${{ formatPrice(price) }}</span>
            <span
                v-if="discount"
                class="inline-block px-2 py-1 font-bold text-primary-ornage rounded-xl bg-primary-pale-orange"
            >{{ discount }}%</span>
        </div>
        <span
            v-if="originalPrice"
            class="font-bold line-through text-neutral-grayish-blue"
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
    return useFormatPrice(value)
}
</script>