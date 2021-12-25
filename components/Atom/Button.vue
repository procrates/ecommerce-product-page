<template>
    <button
        @click="$emit('addToCart')"
        class="w-full py-4 transition-colors duration-200 rounded-lg shadow-2xl text-neutral-white bg-primary-ornage desktop:h-full hover:bg-primary-pale-orange hover:text-primary-ornage"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block w-6 h-6 mr-3 text-base align-middle hover:text-primary-ornage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
        </svg>
        <span class="align-middle">{{ label }}</span>
    </button>
</template>
<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>