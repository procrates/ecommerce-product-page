<template>
    <transition
        enter-active-class="transition-all duration-200"
        enter-from-class="-translate-x-full opacity-100"
        leave-active-class="transition-all duration-200"
        leave-to-class="-translate-x-full opacity-0"
    >
        <div v-if="navState" class="absolute z-20 w-screen h-screen">
            <div
                @click="closeNav"
                v-if="navState"
                class="absolute inset-0 z-10 transition-opacity duration-1000 bg-black bg-opacity-75 opacity-100"
            ></div>
            <aside class="absolute inset-y-0 z-10 w-2/3 p-5 bg-neutral-white">
                <nav>
                    <button class="mb-8" @click="closeNav">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
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
    </transition>
</template>
<script setup lang="ts">import { useNav } from '~~/composables/states';

const navItems = useNav()
const navState = useNavState()
const closeNav = () => navState.value = false
</script>