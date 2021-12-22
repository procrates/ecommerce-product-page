<template>
    <section
        v-show="cartState"
        class="absolute flex flex-col top-16 z-10 bg-neutral-white rounded-xl inset-x-2 desktop:w-1/4 desktop:right-2 desktop:left-auto desktop:shadow-2xl"
    >
        <h1 class="font-bold bg-neutral-light-grayish-blue rounded-t-xl p-5">Cart</h1>
        <div class="bg-neutral-grayish-blue h-px"></div>
        <div class="flex flex-col flex-1 p-3">
            <ul v-if="cartItems.length" class="flex-1">
                <li v-for="item in cartItems" :key="item.id" class="flex items-stretch">
                    <img
                        :src="item.thumbnail"
                        :alt="`${item.thumbnail} thumbnail`"
                        class="w-14 h-14 rounded-xl mr-3"
                    />
                    <div class="flex flex-col w-56 justify-between h-full">
                        <span
                            class="mr-5 text-neutral-dark-grayish-blue truncate text-ellipsis text-lg"
                        >{{ item.title }}</span>
                        <span class="text-neutral-dark-grayish-blue">
                            ${{ formatPrice(item.price) }} x {{ item.quantity }}
                            <span
                                class="font-bold text-neutral-very-dark-blue pl-1"
                            >${{ totalItemPrice(item) }}</span>
                        </span>
                    </div>
                    <button class="h-6 w-6" @click="removeItem(item)">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-neutral-grayish-blue"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
            <button
                v-if="cartItems.length"
                class="text-primary-pale-orange font-bold bg-primary-ornage py-2 rounded-xl w-full h-14 grow-0 mt-5"
            >Checkout</button>
            <div
                v-if="cartItems.length === 0"
                class="text-neutral-dark-grayish-blue text-base font-bold inline-block self-center text-center"
            >Your cart is empty.</div>
        </div>
    </section>
</template>
<script setup lang="ts">
const cartState = useCartState()

const cartItems = useCartItems()

const totalItemPrice = (item) => {
    return formatPrice(item.price * item.quantity)

}
const removeItem = (item) => {
    console.log(cartItems.value, item.id);
    const index = cartItems.value.indexOf((i) => {
        return i.id === item.id
    })
    cartItems.value.splice(index, 1)
    console.log(cartItems.value);

}
const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>
