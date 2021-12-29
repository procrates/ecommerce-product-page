<template>
    <div
        class="flex-row desktop:flex desktop:mt-20 desktop:mx-20 desktop:w-full desktop:justify-evenly desktop:items-center"
    >
        <MoleculeSlider />
        <section class="mx-5 mt-10 desktop:ml-36 desktop:w-1/3 desktop:flex-grow desktop:mt-0">
            <MoleculeProductInfo
                :company="currentProduct.company"
                :title="currentProduct.title"
                :description="currentProduct.description"
            />
            <div class="mt-2 space-y-3">
                <AtomPrice
                    :price="currentProduct.price"
                    :discount="currentProduct.discount"
                    :originalPrice="currentProduct.originalPrice"
                />
                <div v-if="msg" class="text-primary-ornage">{{ msg }}</div>
                <div
                    class="space-y-3 desktop:flex desktop:flex-row desktop:items-stretch desktop:space-y-0"
                >
                    <AtomQuantityModifier />
                    <AtomButton @addToCart="addProductToCart" label="Add to cart" />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
const itemQuantity = useQuantity()
const products = useProducts()
const cartItems = useCartItems()
const currentProduct = products.value.find(p => p.id === 1)
const msg = useMsg()
const addProductToCart = () => {
    if (itemQuantity.value <= 0) {
        msg.value = 'Quantity needs to be atleast 1'
        return
    }

    if (cartItems.value.length <= 0) {
        currentProduct['quantity'] = itemQuantity.value
        cartItems.value.push(currentProduct)
        msg.value = `Added ${itemQuantity.value} ${currentProduct.title} to the cart!`
        itemQuantity.value = 0
    } else {
        cartItems.value.find(i => i.id === currentProduct.id).quantity += itemQuantity.value
        msg.value = `Added ${itemQuantity.value} ${currentProduct.title} to the cart!`
        itemQuantity.value = 0
    }

}
</script>