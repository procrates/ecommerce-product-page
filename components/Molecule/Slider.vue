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
        <div class="block overflow-hidden">
            ci{{ currentIndex }} cii {{ nextImageIndex }}
            <transition-group
                enter-active-class="transition-transform duration-500 ease-in"
                :enter-from-class="currentIndex < nextImageIndex ? '-translate-x-full' : 'translate-x-full'"
                leave-active-class="transition-transform duration-500 ease-in"
                :leave-from-class="currentIndex < nextImageIndex ? '-translate-x-full' : 'translate-x-full'"
            >
                <img
                    :src="currentImage.src"
                    :key="currentImage.index"
                    alt="product image"
                    class="block object-cover overflow-hidden transition-all bg-center desktop:w-full sm:rounded-xl"
                    @click="disabled ? '' : lightboxToggle = !lightboxToggle"
                />
            </transition-group>
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
                :class="index === currentIndex ? 'border-4 border-primary-ornage' : ''"
                class="relative rounded-xl"
                @click.prevent="changeImage(index)"
            >
                <div
                    :class="index === currentIndex ? 'opacity-75 bg-white rounded-xl ' : ''"
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
const currentIndex = ref(0)
const nextImageIndex = ref(null)

const next = () => {
    currentIndex.value++
    nextImageIndex.value = currentIndex.value + 1
}

const prev = () => {
    currentIndex.value--
    nextImageIndex.value = currentIndex.value - 1
}

const currentImage = computed(() => {
    return products.value[0].images[Math.abs(currentIndex.value) % products.value[0].images.length]
})
currentIndex.value++
const changeImage = (index) => {
    currentIndex.value = index
}
const { width } = useWindowSize()
const disabled = ref(true)
width.value <= 1440 ? disabled.value = true : disabled.value = false
watch(width, () => {
    console.log(width.value);
    if (width.value >= 1440) { disabled.value = false } else { disabled.value = true }
})
</script>
<style>
.fade-enter-active-class,
.fade-leave-active-class {
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 1;
}

.fade-enter-to-class,
.fade-leave-to-class {
    visibility: hidden;
    width: 100%;
    opacity: 0;
}
</style>