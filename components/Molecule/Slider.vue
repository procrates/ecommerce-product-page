<template>
    <section
        class="relative desktop:w-1/3 desktop:flex desktop:flex-col desktop:h-full desktop:flex-grow"
    >
        <button
            @click="prev"
            class="absolute z-10 rounded-full desktop:hidden left-3 top-1/2 bg-neutral-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <div class="relative overflow-hidden" :style="`height: ${height}px`">
            <transition
                enter-active-class="transition-all duration-[400ms] rounded-none"
                :enter-from-class="nextImage ? 'left-full' : '-left-full'"
                :enter-to-class="nextImage ? '-translate-x-full left-full' : 'translate-x-full -left-full'"
                leave-active-class="transition duration-[400ms]"
                :leave-to-class="nextImage ? '-translate-x-full' : 'translate-x-full'"
            >
                <div class="absolute w-full h-full" :key="activeImage.index">
                    <img
                        ref="el"
                        :src="activeImage.src"
                        :key="activeImage.index"
                        alt="product image"
                        class="object-cover overflow-hidden bg-center sm:rounded-xl"
                        @click="disabled ? '' : lightboxToggle = !lightboxToggle"
                    />
                </div>
            </transition>
        </div>
        <button
            @click="next"
            class="absolute z-10 rounded-full desktop:hidden right-3 top-1/2 bg-neutral-white"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-10 h-10"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <div class="relative hidden desktop:grid desktop:grid-cols-4 desktop:gap-x-3 desktop:mt-10">
            <button
                v-for="(img,index) in products[0].thumbnails"
                :class="index === activeImageIndex ? 'border-4 border-primary-ornage' : ''"
                class="relative rounded-xl"
                @click.prevent="changeImage(index)"
            >
                <div
                    :class="index === activeImageIndex ? 'opacity-75 bg-white rounded-xl ' : ''"
                    class="absolute inset-0 rounded-md opacity-75 hover:bg-white"
                ></div>

                <img
                    :src="img"
                    hover:border-4
                    hover:border-primary-ornage
                    class="object-cover w-auto rounded-lg"
                />
            </button>
        </div>
    </section>
</template>
<script setup lang="ts">
const lightboxToggle = useLightboxToggleState()
const products = useProducts()
const activeImageIndex = ref(0)
const nextImage = ref(null)
const next = () => {
    if (activeImageIndex.value === products.value[0].images.length - 1) {
        nextImage.value = true
        activeImageIndex.value = 0
        return
    }
    nextImage.value = true
    activeImageIndex.value = activeImageIndex.value + 1
}

const prev = () => {
    if (activeImageIndex.value === 0) {
        nextImage.value = false
        return activeImageIndex.value = products.value[0].images.length - 1
    }
    nextImage.value = false
    activeImageIndex.value = activeImageIndex.value - 1
}

const activeImage = computed(() => {
    return products.value[0].images[activeImageIndex.value];
})

const changeImage = (index) => {
    if (index > activeImageIndex.value) {
        nextImage.value = false
        activeImageIndex.value = index
        return
    }
    nextImage.value = true
    activeImageIndex.value = index
}


const { width } = useWindowSize()
const disabled = ref(true)
width.value <= 1440 ? disabled.value = true : disabled.value = false
watch(width, () => {
    console.log(width.value);
    if (width.value >= 1440) { disabled.value = false } else { disabled.value = true }
})

const el = ref(null)
const { height } = useElementSize(el)


</script>
<style>
</style>