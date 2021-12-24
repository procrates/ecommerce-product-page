<template>
    <div
        class="desktop:flex flex-row desktop:mt-20 desktop:mx-20 desktop:w-full desktop:justify-evenly desktop:items-center"
    >
        <MoleculeSlider />
        <section class="mx-5 desktop:ml-36 desktop:w-1/3 desktop:flex-grow mt-10 desktop:mt-0">
            <MoleculeProductInfo
                :company="currentProduct.company"
                :title="currentProduct.title"
                :description="currentProduct.description"
            />
            <div class="space-y-3 mt-2">
                <AtomPrice
                    :price="currentProduct.price"
                    :discount="currentProduct.discount"
                    :originalPrice="currentProduct.originalPrice"
                />
                <div
                    class="desktop:flex desktop:flex-row space-y-3 desktop:items-stretch desktop:space-y-0"
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
const cart = useCartItems()
const currentProduct = products.value.find(p => p.id === 1)

const addProductToCart = () => {
    if (itemQuantity.value <= 0) return alert('Please choose a quantity.')

    if (cart.value.length <= 0) {
        currentProduct['quantity'] = itemQuantity.value
        cart.value.push(currentProduct)
        itemQuantity.value = 0
    } else {
        cart.value.find(i => i.id === currentProduct.id).quantity += itemQuantity.value
        itemQuantity.value = 0
    }

}
</script>