<template>
    <div
        class="flex items-center justify-between w-full px-5 mr-3 rounded-lg bg-neutral-grayish-blue"
    >
        <button @click="remove" class="p-3 hover:text-xl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-primary-ornage hover:text-primary-pale-orange hover:scale-150"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <span class="font-bold text-neutral-very-dark-blue">{{ itemQuantity }}</span>
        <button @click="add" class="p-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-primary-ornage hover:text-primary-pale-orange hover:scale-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                />
            </svg>
        </button>
    </div>
</template>
<script setup lang="ts">import { useMsg } from '~~/composables/states'


const itemQuantity = useQuantity()
const msg = useMsg()
const add = () => {
    msg.value = ''
    itemQuantity.value++
}
const remove = () => {
    if (itemQuantity.value <= 0) {
        msg.value = 'Quantity needs to be atleast 1'
        return
    }
    msg.value = ''
    itemQuantity.value--
}

function useItemQuantity() {
    throw new Error('Function not implemented.')
}
</script>