<template>
    <div
        v-if="lightboxToggle"
        class="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-70"
    >
        <div class="flex flex-col w-1/3" ref="target">
            <button
                @click="lightboxToggle = !lightboxToggle"
                class="z-30 self-end w-10 h-10 mb-3 text-primary-ornage"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <div class="relative">
                <button
                    @click="prev"
                    class="absolute z-10 rounded-full -left-5 top-1/2 bg-neutral-white text-primary-ornage"
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
                    class="absolute z-20 rounded-full -right-5 top-1/2 bg-neutral-white text-primary-ornage"
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
            </div>
            <div class="hidden desktop:grid desktop:grid-cols-4 desktop:gap-x-3 desktop:mt-10">
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
                        class="object-cover w-auto rounded-xl"
                    />
                </button>
            </div>
        </div>
    </div>
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

const target = ref(null)
onClickOutside(target, () => lightboxToggle.value = false)
const el = ref(null)
const { height } = useElementSize(el)
</script>