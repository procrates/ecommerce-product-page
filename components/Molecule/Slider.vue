<template>
    <section class="relative desktop:w-1/2 desktop:mt-10 desktop:mr-20">
        <button @click="prev" class="absolute left-3 top-1/2 bg-neutral-white rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
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
            v-for="i in [currentIndex]"
            :src="currentImage.src"
            :key="i"
            alt="product image"
            class="desktop:rounded-xl max-h-96 desktop:max-h-max"
        />
        <button @click="next" class="absolute right-3 top-1/2 bg-neutral-white rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
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
        <div
            v-if="windowWidthDesktop"
            class="absolute flex-row space-x-5 flex flex-wrap justify-center"
        >
            <img v-for="img in productImages" :src="img.thumbnail" alt class="object-cover w-1/4" />
        </div>
    </section>
</template>
<script setup lang="ts">
const productImages = reactive([
    {
        id: 1,
        src: "/images/image-product-1.jpg",
        thumbnail: "/images/image-product-1-thumbnail.jpg"
    },
    {
        id: 2,
        src: "/images/image-product-2.jpg",
        thumbnail: "/images/image-product-2-thumbnail.jpg"
    },
    {
        id: 3,
        src: "/images/image-product-3.jpg",
        thumbnail: "/images/image-product-3-thumbnail.jpg"
    },
    {
        id: 4,
        src: "/images/image-product-4.jpg",
        thumbnail: "/images/image-product-4-thumbnail.jpg"
    },
])
const currentIndex = ref(0)

const next = () => {
    currentIndex.value++;
}

const prev = () => {
    currentIndex.value--;
}

const currentImage = computed(() => {

    return productImages[Math.abs(currentIndex.value) % productImages.length];
}

)

console.log(productImages.length);

const { width } = useWindowSize()
const windowWidthDesktop = computed(() => { return width.value >= 1440 })
/* defineProps({
    productImages: {
        type: Array,
        required: true,
        default: () => [{ id: null, src: null }]
    }
}) */

</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    visibility: hidden;
    width: 100%;
    opacity: 0;
}
</style>