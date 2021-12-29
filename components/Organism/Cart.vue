<template>
    <section
        v-if="cartState"
        ref="cartRef"
        class="absolute z-20 flex flex-col top-16 bg-neutral-white rounded-xl inset-x-2 desktop:w-1/4 desktop:right-2 desktop:left-auto desktop:shadow-2xl"
    >
        <h1 class="p-5 font-bold bg-neutral-light-grayish-blue rounded-t-xl">Cart</h1>
        <div class="h-px bg-neutral-grayish-blue"></div>
        <div class="flex flex-col flex-1 p-3">
            <ul v-if="cartItems.length" class="flex-1">
                <li v-for="item in cartItems" :key="item.id" class="flex items-stretch">
                    <img
                        :src="item.thumbnails[0]"
                        :alt="`${item.thumbnails[0]} thumbnail`"
                        class="mr-3 w-14 h-14 rounded-xl"
                    />
                    <div class="flex flex-col justify-between w-56 h-full">
                        <span
                            class="mr-5 text-lg truncate text-neutral-dark-grayish-blue text-ellipsis"
                        >{{ item.title }}</span>
                        <span class="text-neutral-dark-grayish-blue">
                            ${{ formatPrice(item.price) }} x {{ item.quantity }}
                            <span
                                class="pl-1 font-bold text-neutral-very-dark-blue"
                            >${{ totalItemPrice(item) }}</span>
                        </span>
                    </div>
                    <button class="w-6 h-6" @click="removeItem(item)">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-neutral-grayish-blue"
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
                class="w-full py-2 mt-5 font-bold transition-colors duration-200 text-primary-pale-orange bg-primary-ornage rounded-xl h-14 grow-0 hover:bg-primary-pale-orange hover:text-primary-ornage"
            >Checkout</button>
            <div
                v-if="cartItems.length === 0"
                class="self-center inline-block text-base font-bold text-center text-neutral-dark-grayish-blue"
            >Your cart is empty.</div>
        </div>
    </section>
</template>
<script setup lang="ts">

const cartRef = ref(null)
const cartState = useCartState()

onClickOutside(cartRef, (e) => {
    cartState.value = !cartState.value
})

const cartItems = useCartItems()

const totalItemPrice = (item) => {
    return formatPrice(item.price * item.quantity)

}
const removeItem = (item) => {
    const index = cartItems.value.indexOf((i) => {
        return i.id === item.id
    })
    cartItems.value.splice(index, 1)

}
const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>
