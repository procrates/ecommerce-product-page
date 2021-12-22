<template>
    <div v-show="navState" class="absolute w-screen h-screen">
        <div @click="closeNav" class="bg-black z-10 bg-opacity-75 absolute inset-0"></div>
        <aside class="absolute inset-y-0 z-10 bg-neutral-white p-5 w-2/3">
            <nav>
                <button class="mb-8" @click="closeNav">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
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
                <ul class="space-y-2 font-bold">
                    <li v-for="item in navItems" :key="item.id">{{ item.label }}</li>
                </ul>
            </nav>
        </aside>
    </div>
</template>
<script setup lang="ts">
import { useNavState } from '~~/composables/states';


const clicked = () => console.log('clicked');

const navItems = ref([
    {
        id: 1,
        label: "Collection",
        link: "/collection"
    },
    {
        id: 2,
        label: "Men",
        link: "/men"
    },
    {
        id: 3,
        label: "Woman",
        link: "/woman"
    },
    {
        id: 4,
        label: "About",
        link: "/about"
    },
    {
        id: 5,
        label: "Contact",
        link: "/contact"
    },

])
const navState = useNavState()
const closeNav = () => navState.value = false
</script>