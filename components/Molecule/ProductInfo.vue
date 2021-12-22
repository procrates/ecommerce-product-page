<template>
    <section class="flex flex-col">
        <span class="font-bold text-primary-ornage uppercase text-sm">{{ company }}</span>
        <h1
            class="font-bold text-3xl text-neutral-very-dark-blue mt-1 mb-3 desktop:text-5xl"
        >{{ title }}</h1>
        <p class="text-base text-neutral-dark-grayish-blue">{{ description }}</p>
    </section>
</template>
<script setup lang="ts">
defineProps({
    company: {
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>