<template>
    <div
        v-if="lightboxToggle"
        class="fixed inset-0 flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black bg-opacity-70 overscroll-contain"
    >
        <div class="flex flex-col flex-grow w-1/3" ref="target">
            <button
                @click="lightboxToggle = !lightboxToggle"
                class="self-end w-10 h-10 mb-3 text-primary-ornage"
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
                    class="absolute rounded-full -left-5 top-1/2 bg-neutral-white text-primary-ornage"
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
                <img
                    :src="currentImage"
                    alt
                    ref="target"
                    class="flex-shrink mx-auto rounded-xl aspect-square"
                />
                <button
                    @click="next"
                    class="absolute rounded-full -right-5 top-1/2 bg-neutral-white text-primary-ornage"
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
                    :class="index === currentIndex ? 'border-4 border-primary-ornage' : ''"
                    class="relative rounded-xl"
                    @click.prevent="changeImage(index)"
                >
                    <div
                        :class="index === currentIndex ? 'opacity-75 bg-white rounded-xl ' : ''"
                        class="absolute inset-0 rounded-md opacity-75 hover:bg-white"
                    >{</div>
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
const currentProduct = products.value[0]

console.log(currentProduct);

const currentIndex = ref(0)

const next = () => {
    if (currentIndex.value === currentProduct.thumbnails.length - 1) return currentIndex.value = 0

    currentIndex.value++;
}

const prev = () => {
    if (currentIndex.value === 0) return currentIndex.value = currentProduct.thumbnails.length - 1

    currentIndex.value--;
}

const currentImage = computed(() => {
    return currentProduct.images[Math.abs(currentIndex.value) % currentProduct.images.length];
})

const changeImage = (index) => {

    currentIndex.value = index
}

const target = ref(null)
onClickOutside(target, () => lightboxToggle.value = false)

</script>